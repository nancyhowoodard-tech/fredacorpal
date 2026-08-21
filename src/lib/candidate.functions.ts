import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type CandidateRecord = {
  id: string;
  username: string;
  full_name: string;
  email: string;
  position: string;
  status: string;
  personal: JsonValue;
  tax_form: JsonValue;
  agreements_accepted_at: string | null;
  submitted_at: string | null;
};

export type CandidateDocument = {
  id: string;
  doc_type: string;
  file_name: string;
  storage_path: string;
  status: string;
  created_at: string;
};

export type CandidateOffer = {
  id: string;
  title: string;
  hourly_rate: number;
  start_date: string | null;
  terms: string;
  status: string;
};

export const getCandidatePortal = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const { data: candidate } = await supabase
      .from("candidates")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (!candidate) throw new Error("This account is not a candidate account.");

    const [docsRes, offerRes] = await Promise.all([
      supabase
        .from("candidate_documents")
        .select("id, doc_type, file_name, storage_path, status, created_at")
        .eq("candidate_id", userId)
        .order("created_at", { ascending: false }),
      supabase
        .from("candidate_offers")
        .select("id, title, hourly_rate, start_date, terms, status")
        .eq("candidate_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
    ]);

    return {
      candidate: candidate as unknown as CandidateRecord,
      documents: (docsRes.data ?? []) as CandidateDocument[],
      offer: (offerRes.data ?? null) as CandidateOffer | null,
    };
  });

export const saveCandidateProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        full_name: z.string().trim().min(2).max(120),
        phone: z.string().trim().max(40).default(""),
        address: z.string().trim().max(240).default(""),
        start_availability: z.string().trim().max(60).default(""),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("candidates")
      .update({
        full_name: data.full_name,
        personal: {
          phone: data.phone,
          address: data.address,
          start_availability: data.start_availability,
        },
      })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const saveTaxForm = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        filing_status: z.enum(["single", "married", "head_of_household"]),
        tax_id_last4: z.string().trim().regex(/^\d{4}$/, "Enter the last 4 digits."),
        allowances: z.number().int().min(0).max(20),
        signature: z.string().trim().min(2).max(120),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("candidates")
      .update({ tax_form: { ...data, completed_at: new Date().toISOString() } })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const recordCandidateDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        doc_type: z.string().trim().min(2).max(80),
        file_name: z.string().trim().min(1).max(200),
        storage_path: z.string().trim().min(1).max(400),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    if (!data.storage_path.startsWith(`${context.userId}/`)) {
      throw new Error("Invalid upload path.");
    }
    const { error } = await context.supabase.from("candidate_documents").insert({
      candidate_id: context.userId,
      doc_type: data.doc_type,
      file_name: data.file_name,
      storage_path: data.storage_path,
    });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const respondToOffer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), accept: z.boolean() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("candidate_offers")
      .update({ status: data.accept ? "accepted" : "declined" })
      .eq("id", data.id)
      .eq("candidate_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const acceptAgreements = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { error } = await context.supabase
      .from("candidates")
      .update({ agreements_accepted_at: new Date().toISOString() })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const submitOnboarding = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: candidate } = await context.supabase
      .from("candidates")
      .select("agreements_accepted_at, tax_form")
      .eq("id", context.userId)
      .maybeSingle();

    if (!candidate?.agreements_accepted_at) {
      throw new Error("Accept the agreements before submitting your onboarding.");
    }
    if (!candidate.tax_form || Object.keys(candidate.tax_form).length === 0) {
      throw new Error("Complete your tax form before submitting your onboarding.");
    }

    const { error } = await context.supabase
      .from("candidates")
      .update({ status: "submitted", submitted_at: new Date().toISOString() })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
