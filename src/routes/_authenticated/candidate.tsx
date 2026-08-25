import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, FileText, ScrollText, UploadCloud } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { supabase } from "@/integrations/supabase/client";
import {
  acceptAgreements,
  getCandidatePortal,
  recordCandidateDocument,
  respondToOffer,
  saveCandidateProfile,
  saveTaxForm,
  submitOnboarding,
} from "@/lib/candidate.functions";

export const Route = createFileRoute("/_authenticated/candidate")({
  component: CandidateDashboard,
});

const cardClass = "rounded-lg border border-border bg-card p-6";
const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none";

function StepBadge({ done, label }: { done: boolean; label: string }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold " +
        (done ? "border-gold/60 bg-gold/10 text-gold" : "border-border text-muted-foreground")
      }
    >
      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

function CandidateDashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchPortal = useServerFn(getCandidatePortal);
  const saveProfile = useServerFn(saveCandidateProfile);
  const saveTax = useServerFn(saveTaxForm);
  const recordDoc = useServerFn(recordCandidateDocument);
  const answerOffer = useServerFn(respondToOffer);
  const acceptTerms = useServerFn(acceptAgreements);
  const submitAll = useServerFn(submitOnboarding);

  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data, isLoading, error: loadError } = useQuery({
    queryKey: ["candidate-portal"],
    queryFn: () => fetchPortal(),
    retry: false,
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["candidate-portal"] });
  const fail = (e: Error) => setError(e.message);

  const profileMutation = useMutation({
    mutationFn: (input: {
      full_name: string;
      phone: string;
      address: string;
      start_availability: string;
    }) => saveProfile({ data: input }),
    onSuccess: () => {
      setNotice("Personal details saved.");
      invalidate();
    },
    onError: fail,
  });

  const taxMutation = useMutation({
    mutationFn: (input: {
      filing_status: "single" | "married" | "head_of_household";
      tax_id_last4: string;
      allowances: number;
      signature: string;
    }) => saveTax({ data: input }),
    onSuccess: () => {
      setNotice("Tax form saved.");
      invalidate();
    },
    onError: fail,
  });

  const offerMutation = useMutation({
    mutationFn: (input: { id: string; accept: boolean }) => answerOffer({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const agreementsMutation = useMutation({
    mutationFn: () => acceptTerms(),
    onSuccess: invalidate,
    onError: fail,
  });

  const submitMutation = useMutation({
    mutationFn: () => submitAll(),
    onSuccess: () => {
      setNotice("Onboarding submitted. Your onboarding lead will review it shortly.");
      invalidate();
    },
    onError: fail,
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/portal", replace: true });
  };

  if (isLoading) {
    return (
      <div className="bg-surface py-20">
        <div className="container-x text-sm text-muted-foreground">Loading your onboarding…</div>
      </div>
    );
  }

  if (loadError || !data) {
    return (
      <div className="bg-surface py-20">
        <div className="container-x">
          <h1 className="font-display text-2xl font-bold">Candidate Portal</h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            This account is not a candidate account. If you are an administrator or staff member,
            use the Admin Portal instead.
          </p>
          <div className="mt-6">
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const candidate = data.candidate;
  const personal = (candidate.personal ?? {}) as Record<string, string>;
  const tax = (candidate.tax_form ?? {}) as Record<string, string | number>;
  const taxDone = Object.keys(tax).length > 0;
  const agreementsDone = Boolean(candidate.agreements_accepted_at);
  const submitted = Boolean(candidate.submitted_at);

  const onProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    profileMutation.mutate({
      full_name: String(fd.get("full_name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      address: String(fd.get("address") ?? ""),
      start_availability: String(fd.get("start_availability") ?? ""),
    });
  };

  const onTax = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    taxMutation.mutate({
      filing_status: String(fd.get("filing_status")) as
        | "single"
        | "married"
        | "head_of_household",
      tax_id_last4: String(fd.get("tax_id_last4") ?? ""),
      allowances: Number(fd.get("allowances") ?? 0),
      signature: String(fd.get("signature") ?? ""),
    });
  };

  const onUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const file = fd.get("file");
    const docType = String(fd.get("doc_type") ?? "");
    if (!(file instanceof File) || file.size === 0) {
      setError("Choose a file to upload.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Files must be 10MB or smaller.");
      return;
    }

    setUploading(true);
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${candidate.id}/${Date.now()}-${safeName}`;
    const { error: uploadError } = await supabase.storage
      .from("candidate-documents")
      .upload(path, file);

    if (uploadError) {
      setUploading(false);
      setError(uploadError.message);
      return;
    }

    try {
      await recordDoc({ data: { doc_type: docType, file_name: file.name, storage_path: path } });
      setNotice("Document uploaded.");
      form.reset();
      invalidate();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-surface py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Candidate Portal</p>
            <h1 className="mt-3 font-display text-3xl font-bold">{candidate.full_name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {candidate.position} · @{candidate.username} · Status:{" "}
              <span className="font-semibold text-foreground">{candidate.status}</span>
            </p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sign Out
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <StepBadge done={Boolean(personal["phone"])} label="Personal details" />
          <StepBadge done={data.documents.length > 0} label="Documents uploaded" />
          <StepBadge done={Boolean(data.offer)} label="Offer received" />
          <StepBadge done={taxDone} label="Tax form" />
          <StepBadge done={agreementsDone} label="Agreements accepted" />
          <StepBadge done={submitted} label="Onboarding submitted" />
        </div>

        {notice ? (
          <p className="mt-6 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm">
            {notice}
          </p>
        ) : null}
        {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className={cardClass}>
            <h2 className="font-display text-lg font-bold">Personal details</h2>
            <form onSubmit={onProfile} className="mt-5 grid gap-4">
              <div>
                <label htmlFor="full_name" className="text-sm font-semibold">
                  Full name
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  required
                  defaultValue={candidate.full_name}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  defaultValue={personal["phone"] ?? ""}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-semibold">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  defaultValue={personal["address"] ?? ""}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="start_availability" className="text-sm font-semibold">
                  Earliest start date
                </label>
                <input
                  id="start_availability"
                  name="start_availability"
                  defaultValue={personal["start_availability"] ?? ""}
                  className={fieldClass}
                  placeholder="e.g. 2 weeks from offer"
                />
              </div>
              <Button type="submit" disabled={profileMutation.isPending}>
                {profileMutation.isPending ? "Saving…" : "Save Details"}
              </Button>
            </form>
          </section>

          <section className={cardClass}>
            <div className="flex items-center gap-3">
              <UploadCloud className="h-4 w-4 text-gold" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold">Documents</h2>
            </div>
            <form onSubmit={onUpload} className="mt-5 grid gap-4">
              <div>
                <label htmlFor="doc_type" className="text-sm font-semibold">
                  Document type
                </label>
                <select id="doc_type" name="doc_type" className={fieldClass} required>
                  <option value="Government ID">Government ID</option>
                  <option value="Proof of Address">Proof of Address</option>
                  <option value="Resume / CV">Resume / CV</option>
                  <option value="Certification">Certification</option>
                  <option value="Signed Agreement">Signed Agreement</option>
                </select>
              </div>
              <div>
                <label htmlFor="file" className="text-sm font-semibold">
                  File (max 10MB)
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  required
                  accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx"
                  className={fieldClass}
                />
              </div>
              <Button type="submit" disabled={uploading}>
                {uploading ? "Uploading…" : "Upload Document"}
              </Button>
            </form>

            <ul className="mt-6 divide-y divide-border text-sm">
              {data.documents.length === 0 ? (
                <li className="py-3 text-muted-foreground">No documents uploaded yet.</li>
              ) : (
                data.documents.map((doc) => (
                  <li key={doc.id} className="flex items-center justify-between gap-3 py-3">
                    <span className="flex min-w-0 items-center gap-2">
                      <FileText className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block truncate font-semibold">{doc.file_name}</span>
                        <span className="text-xs text-muted-foreground">{doc.doc_type}</span>
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      {doc.status}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </section>

          <section className={cardClass}>
            <h2 className="font-display text-lg font-bold">Your offer</h2>
            {data.offer ? (
              <div className="mt-5 text-sm">
                <p className="font-display text-xl font-bold">{data.offer.title}</p>
                <p className="mt-2 text-muted-foreground">
                  ${Number(data.offer.hourly_rate).toFixed(2)}/hr
                  {data.offer.start_date ? ` · starts ${data.offer.start_date}` : ""}
                </p>
                <p className="mt-4 leading-relaxed whitespace-pre-line text-muted-foreground">
                  {data.offer.terms || "Standard Fredacorpal™ engagement terms apply."}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase">Status: {data.offer.status}</p>
                {data.offer.status === "sent" ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button
                      onClick={() =>
                        offerMutation.mutate({ id: data.offer!.id, accept: true })
                      }
                      disabled={offerMutation.isPending}
                    >
                      Accept Offer
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        offerMutation.mutate({ id: data.offer!.id, accept: false })
                      }
                      disabled={offerMutation.isPending}
                    >
                      Decline
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                No offer has been issued yet. Your onboarding lead will send one once your
                documents are verified.
              </p>
            )}
          </section>

          <section className={cardClass}>
            <h2 className="font-display text-lg font-bold">Tax form</h2>
            <form onSubmit={onTax} className="mt-5 grid gap-4">
              <div>
                <label htmlFor="filing_status" className="text-sm font-semibold">
                  Filing status
                </label>
                <select
                  id="filing_status"
                  name="filing_status"
                  className={fieldClass}
                  defaultValue={String(tax["filing_status"] ?? "single")}
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="head_of_household">Head of household</option>
                </select>
              </div>
              <div>
                <label htmlFor="tax_id_last4" className="text-sm font-semibold">
                  Tax ID (last 4 digits)
                </label>
                <input
                  id="tax_id_last4"
                  name="tax_id_last4"
                  required
                  inputMode="numeric"
                  maxLength={4}
                  defaultValue={String(tax["tax_id_last4"] ?? "")}
                  className={fieldClass}
                  placeholder="1234"
                />
              </div>
              <div>
                <label htmlFor="allowances" className="text-sm font-semibold">
                  Allowances
                </label>
                <input
                  id="allowances"
                  name="allowances"
                  type="number"
                  min="0"
                  max="20"
                  required
                  defaultValue={String(tax["allowances"] ?? 0)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="signature" className="text-sm font-semibold">
                  Digital signature (full name)
                </label>
                <input
                  id="signature"
                  name="signature"
                  required
                  defaultValue={String(tax["signature"] ?? "")}
                  className={fieldClass}
                />
              </div>
              <Button type="submit" disabled={taxMutation.isPending}>
                {taxMutation.isPending ? "Saving…" : "Save Tax Form"}
              </Button>
            </form>
          </section>
        </div>

        <section className={`${cardClass} mt-8`}>
          <div className="flex items-center gap-3">
            <ScrollText className="h-4 w-4 text-gold" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold">Agreements &amp; submission</h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            By accepting, you confirm the accuracy of your onboarding information and agree to the
            Fredacorpal™ confidentiality, acceptable-use and remote-work policies, together with
            the Terms of Service and Privacy Policy.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {agreementsDone ? (
              <span className="text-sm font-semibold text-gold">
                Agreements accepted on{" "}
                {new Date(candidate.agreements_accepted_at as string).toLocaleDateString()}
              </span>
            ) : (
              <Button
                variant="outline"
                onClick={() => agreementsMutation.mutate()}
                disabled={agreementsMutation.isPending}
              >
                Accept Agreements
              </Button>
            )}
            <Button
              onClick={() => submitMutation.mutate()}
              disabled={submitMutation.isPending || submitted}
            >
              {submitted ? "Onboarding Submitted" : "Submit Onboarding"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
