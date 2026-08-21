import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

type RpcClient = { rpc: (fn: string, args: object) => Promise<{ data: unknown }> };

async function assertAdmin(supabase: unknown, userId: string) {
  const { data } = await (supabase as RpcClient).rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });
  if (data !== true) throw new Error("Forbidden: admin access required.");
}

export const listCandidates = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);

    const [candidatesRes, docsRes, offersRes] = await Promise.all([
      context.supabase
        .from("candidates")
        .select(
          "id, username, full_name, email, position, status, personal, tax_form, agreements_accepted_at, submitted_at, created_at",
        )
        .order("created_at", { ascending: true }),
      context.supabase
        .from("candidate_documents")
        .select("id, candidate_id, doc_type, file_name, storage_path, status, created_at")
        .order("created_at", { ascending: false }),
      context.supabase
        .from("candidate_offers")
        .select("id, candidate_id, title, hourly_rate, start_date, terms, status, created_at")
        .order("created_at", { ascending: false }),
    ]);

    return {
      candidates: (candidatesRes.data ?? []).map((c) => ({
        id: c.id,
        username: c.username,
        full_name: c.full_name,
        email: c.email,
        position: c.position,
        status: c.status,
        personal: JSON.stringify(c.personal ?? {}),
        tax_form: JSON.stringify(c.tax_form ?? {}),
        agreements_accepted_at: c.agreements_accepted_at,
        submitted_at: c.submitted_at,
      })),
      documents: (docsRes.data ?? []).map((d) => ({ ...d })),
      offers: (offersRes.data ?? []).map((o) => ({
        ...o,
        hourly_rate: Number(o.hourly_rate),
      })),
    };
  });

export const getDocumentUrl = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { data: doc } = await context.supabase
      .from("candidate_documents")
      .select("storage_path")
      .eq("id", data.id)
      .maybeSingle();
    if (!doc) throw new Error("Document not found.");

    const { data: signed, error } = await context.supabase.storage
      .from("candidate-documents")
      .createSignedUrl(doc.storage_path, 300);
    if (error || !signed) throw new Error("Could not open that document.");
    return { url: signed.signedUrl };
  });

export const setDocumentStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["pending", "verified", "rejected"]),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase
      .from("candidate_documents")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const createOffer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        candidate_id: z.string().uuid(),
        title: z.string().trim().min(2).max(120),
        hourly_rate: z.number().min(0).max(1000),
        start_date: z.string().trim().max(20).default(""),
        terms: z.string().trim().max(2000).default(""),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("candidate_offers").insert({
      candidate_id: data.candidate_id,
      title: data.title,
      hourly_rate: data.hourly_rate,
      start_date: data.start_date || null,
      terms: data.terms,
      status: "sent",
    });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const setCandidateStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["onboarding", "submitted", "approved", "rejected"]),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase
      .from("candidates")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const convertToEmployee = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        job_title: z.string().trim().min(2).max(120),
        hourly_rate: z.number().min(0).max(1000),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);

    const { data: candidate } = await context.supabase
      .from("candidates")
      .select("id, full_name, email, status")
      .eq("id", data.id)
      .maybeSingle();
    if (!candidate) throw new Error("Candidate not found.");
    if (candidate.status !== "approved") {
      throw new Error("Approve the onboarding before converting this candidate.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error: profileError } = await supabaseAdmin.from("profiles").upsert({
      id: candidate.id,
      email: candidate.email,
      full_name: candidate.full_name,
      job_title: data.job_title,
      hourly_rate: data.hourly_rate,
    });
    if (profileError) throw new Error(profileError.message);

    await supabaseAdmin.from("user_roles").delete().eq("user_id", candidate.id);
    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: candidate.id, role: "staff" });
    if (roleError) throw new Error(roleError.message);

    await supabaseAdmin.from("candidates").update({ status: "employee" }).eq("id", candidate.id);
    return { ok: true as const };
  });

export const createCandidate = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        username: z
          .string()
          .trim()
          .min(3)
          .max(40)
          .regex(/^[a-z0-9._-]+$/i, "Use letters, numbers, dots, dashes or underscores."),
        code: z.string().trim().min(4).max(40),
        full_name: z.string().trim().min(2).max(120),
        position: z.string().trim().min(2).max(120),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { CANDIDATE_EMAIL_DOMAIN } = await import("@/lib/candidate-domain");
    const username = data.username.toLowerCase();

    const { data: existing } = await supabaseAdmin
      .from("candidate_credentials")
      .select("user_id")
      .eq("username", username)
      .maybeSingle();
    if (existing) throw new Error("That candidate username is already in use.");

    const email = `${username}@${CANDIDATE_EMAIL_DOMAIN}`;
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: crypto.randomUUID() + crypto.randomUUID(),
      email_confirm: true,
      user_metadata: { full_name: data.full_name },
    });
    if (error || !created.user) throw new Error(error?.message ?? "Could not create candidate.");

    const id = created.user.id;
    await supabaseAdmin.from("candidates").insert({
      id,
      username,
      full_name: data.full_name,
      email,
      position: data.position,
      status: "onboarding",
    });
    await supabaseAdmin.from("user_roles").delete().eq("user_id", id);
    await supabaseAdmin.from("user_roles").insert({ user_id: id, role: "candidate" });
    await supabaseAdmin
      .from("candidate_credentials")
      .insert({ user_id: id, username, code: data.code });

    return { ok: true as const, username };
  });
