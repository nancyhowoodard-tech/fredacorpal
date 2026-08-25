import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { FileText, UserPlus } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import {
  convertToEmployee,
  createCandidate,
  createOffer,
  getDocumentUrl,
  listCandidates,
  setCandidateStatus,
  setDocumentStatus,
} from "@/lib/candidate-admin.functions";

export const Route = createFileRoute("/_authenticated/candidates")({
  component: AdminCandidates,
});

const cardClass = "rounded-lg border border-border bg-card p-6";
const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none";

function AdminCandidates() {
  const queryClient = useQueryClient();
  const fetchAll = useServerFn(listCandidates);
  const addCandidate = useServerFn(createCandidate);
  const docStatus = useServerFn(setDocumentStatus);
  const docUrl = useServerFn(getDocumentUrl);
  const makeOffer = useServerFn(createOffer);
  const candidateStatus = useServerFn(setCandidateStatus);
  const convert = useServerFn(convertToEmployee);

  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const { data, isLoading, error: loadError } = useQuery({
    queryKey: ["admin-candidates"],
    queryFn: () => fetchAll(),
    retry: false,
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["admin-candidates"] });
  const fail = (e: Error) => setError(e.message);

  const createMutation = useMutation({
    mutationFn: (input: {
      username: string;
      code: string;
      full_name: string;
      position: string;
    }) => addCandidate({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const docMutation = useMutation({
    mutationFn: (input: { id: string; status: "pending" | "verified" | "rejected" }) =>
      docStatus({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const offerMutation = useMutation({
    mutationFn: (input: {
      candidate_id: string;
      title: string;
      hourly_rate: number;
      start_date: string;
      terms: string;
    }) => makeOffer({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const statusMutation = useMutation({
    mutationFn: (input: {
      id: string;
      status: "onboarding" | "submitted" | "approved" | "rejected";
    }) => candidateStatus({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const convertMutation = useMutation({
    mutationFn: (input: { id: string; job_title: string; hourly_rate: number }) =>
      convert({ data: input }),
    onSuccess: invalidate,
    onError: fail,
  });

  const openDoc = async (id: string) => {
    setError(null);
    try {
      const { url } = await docUrl({ data: { id } });
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      fail(e as Error);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-surface py-20">
        <div className="container-x text-sm text-muted-foreground">Loading candidates…</div>
      </div>
    );
  }

  if (loadError || !data) {
    return (
      <div className="bg-surface py-20">
        <div className="container-x">
          <h1 className="font-display text-2xl font-bold">Candidate management</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Administrator access is required for this workspace.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 inline-flex min-h-11 items-center rounded-md border border-gold/60 px-5 text-sm font-semibold hover:bg-gold/10"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  const onCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    createMutation.mutate(
      {
        username: String(fd.get("username") ?? ""),
        code: String(fd.get("code") ?? ""),
        full_name: String(fd.get("full_name") ?? ""),
        position: String(fd.get("position") ?? ""),
      },
      { onSuccess: () => form.reset() },
    );
  };

  const onOffer = (e: FormEvent<HTMLFormElement>, candidateId: string) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    offerMutation.mutate(
      {
        candidate_id: candidateId,
        title: String(fd.get("title") ?? ""),
        hourly_rate: Number(fd.get("hourly_rate") ?? 60),
        start_date: String(fd.get("start_date") ?? ""),
        terms: String(fd.get("terms") ?? ""),
      },
      { onSuccess: () => form.reset() },
    );
  };

  return (
    <div className="bg-surface py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Admin Portal</p>
            <h1 className="mt-3 font-display text-3xl font-bold">Candidate management</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Review information, verify documents, issue offers, approve onboarding and convert
              candidates into employees.
            </p>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex min-h-11 items-center rounded-md border border-gold/60 px-5 text-sm font-semibold hover:bg-gold/10"
          >
            Staff Dashboard
          </Link>
        </div>

        {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

        <section className={`${cardClass} mt-10`}>
          <div className="flex items-center gap-3">
            <UserPlus className="h-4 w-4 text-gold" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold">Add a candidate</h2>
          </div>
          <form onSubmit={onCreate} className="mt-5 grid gap-4 sm:grid-cols-4">
            <div>
              <label htmlFor="full_name" className="text-sm font-semibold">
                Full name
              </label>
              <input id="full_name" name="full_name" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="username" className="text-sm font-semibold">
                Username
              </label>
              <input id="username" name="username" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="code" className="text-sm font-semibold">
                Access code
              </label>
              <input id="code" name="code" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="position" className="text-sm font-semibold">
                Position
              </label>
              <input id="position" name="position" required className={fieldClass} />
            </div>
            <div className="sm:col-span-4">
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Creating…" : "Create Candidate"}
              </Button>
            </div>
          </form>
        </section>

        <div className="mt-8 grid gap-6">
          {data.candidates.length === 0 ? (
            <p className="text-sm text-muted-foreground">No candidates yet.</p>
          ) : (
            data.candidates.map((c) => {
              const docs = data.documents.filter((d) => d.candidate_id === c.id);
              const offers = data.offers.filter((o) => o.candidate_id === c.id);
              const personal = JSON.parse(c.personal) as Record<string, string>;
              const tax = JSON.parse(c.tax_form) as Record<string, string | number>;
              const open = selected === c.id;

              return (
                <section key={c.id} className={cardClass}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-xl font-bold">{c.full_name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        @{c.username} · {c.position} · Status:{" "}
                        <span className="font-semibold text-foreground">{c.status}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelected(open ? null : c.id)}
                      >
                        {open ? "Hide details" : "Manage"}
                      </Button>
                      {c.status === "submitted" ? (
                        <Button
                          size="sm"
                          onClick={() => statusMutation.mutate({ id: c.id, status: "approved" })}
                        >
                          Approve Onboarding
                        </Button>
                      ) : null}
                      {c.status === "approved" ? (
                        <Button
                          size="sm"
                          onClick={() =>
                            convertMutation.mutate({
                              id: c.id,
                              job_title: c.position || "Team Member",
                              hourly_rate: offers[0]?.hourly_rate ?? 60,
                            })
                          }
                        >
                          Convert to Employee
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  {open ? (
                    <div className="mt-6 grid gap-8 lg:grid-cols-2">
                      <div>
                        <h3 className="text-xs tracking-[0.2em] text-gold uppercase">
                          Candidate information
                        </h3>
                        <dl className="mt-4 grid gap-2 text-sm">
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Email</dt>
                            <dd className="truncate">{c.email}</dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Phone</dt>
                            <dd>{personal["phone"] || "—"}</dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Address</dt>
                            <dd className="truncate">{personal["address"] || "—"}</dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Availability</dt>
                            <dd>{personal["start_availability"] || "—"}</dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Tax form</dt>
                            <dd>
                              {Object.keys(tax).length > 0
                                ? `${tax["filing_status"]} · ••••${tax["tax_id_last4"]}`
                                : "Not completed"}
                            </dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Agreements</dt>
                            <dd>
                              {c.agreements_accepted_at
                                ? new Date(c.agreements_accepted_at).toLocaleDateString()
                                : "Pending"}
                            </dd>
                          </div>
                          <div className="flex justify-between gap-4">
                            <dt className="text-muted-foreground">Submitted</dt>
                            <dd>
                              {c.submitted_at
                                ? new Date(c.submitted_at).toLocaleDateString()
                                : "Not yet"}
                            </dd>
                          </div>
                        </dl>

                        <h3 className="mt-8 text-xs tracking-[0.2em] text-gold uppercase">
                          Documents
                        </h3>
                        <ul className="mt-4 divide-y divide-border text-sm">
                          {docs.length === 0 ? (
                            <li className="py-3 text-muted-foreground">No documents uploaded.</li>
                          ) : (
                            docs.map((d) => (
                              <li
                                key={d.id}
                                className="flex flex-wrap items-center justify-between gap-3 py-3"
                              >
                                <button
                                  type="button"
                                  onClick={() => openDoc(d.id)}
                                  className="flex min-w-0 items-center gap-2 text-left hover:text-gold"
                                >
                                  <FileText
                                    className="h-4 w-4 shrink-0 text-gold"
                                    aria-hidden="true"
                                  />
                                  <span className="min-w-0">
                                    <span className="block truncate font-semibold">
                                      {d.file_name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {d.doc_type}
                                    </span>
                                  </span>
                                </button>
                                <select
                                  value={d.status}
                                  onChange={(e) =>
                                    docMutation.mutate({
                                      id: d.id,
                                      status: e.target.value as
                                        | "pending"
                                        | "verified"
                                        | "rejected",
                                    })
                                  }
                                  className="rounded-md border border-input bg-background px-2 py-1 text-xs"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="verified">Verified</option>
                                  <option value="rejected">Rejected</option>
                                </select>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs tracking-[0.2em] text-gold uppercase">Offers</h3>
                        <ul className="mt-4 divide-y divide-border text-sm">
                          {offers.length === 0 ? (
                            <li className="py-3 text-muted-foreground">No offers issued.</li>
                          ) : (
                            offers.map((o) => (
                              <li key={o.id} className="py-3">
                                <span className="font-semibold">{o.title}</span>
                                <span className="block text-xs text-muted-foreground">
                                  ${o.hourly_rate.toFixed(2)}/hr
                                  {o.start_date ? ` · ${o.start_date}` : ""} ·{" "}
                                  {o.status.toUpperCase()}
                                </span>
                              </li>
                            ))
                          )}
                        </ul>

                        <form onSubmit={(e) => onOffer(e, c.id)} className="mt-6 grid gap-4">
                          <div>
                            <label className="text-sm font-semibold">Offer title</label>
                            <input
                              name="title"
                              required
                              className={fieldClass}
                              placeholder="Customer Care Specialist"
                            />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="text-sm font-semibold">Hourly rate</label>
                              <input
                                name="hourly_rate"
                                type="number"
                                step="0.5"
                                min="0"
                                defaultValue={60}
                                required
                                className={fieldClass}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold">Start date</label>
                              <input name="start_date" type="date" className={fieldClass} />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-semibold">Terms</label>
                            <textarea name="terms" rows={3} className={fieldClass} />
                          </div>
                          <Button type="submit" disabled={offerMutation.isPending}>
                            {offerMutation.isPending ? "Sending…" : "Create Offer"}
                          </Button>
                        </form>
                      </div>
                    </div>
                  ) : null}
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
