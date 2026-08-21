import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export type StaffProfile = {
  id: string;
  email: string;
  full_name: string;
  job_title: string;
  hourly_rate: number;
  created_at: string;
  roles: string[];
};

export type WorkLog = {
  id: string;
  user_id: string;
  work_date: string;
  hours: number;
  notes: string;
  created_at: string;
};

export const getDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const [profileRes, rolesRes, logsRes, inquiriesRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", userId),
      supabase
        .from("work_logs")
        .select("*")
        .eq("user_id", userId)
        .order("work_date", { ascending: false })
        .limit(200),
      supabase
        .from("contact_inquiries")
        .select("id, name, company, email, service, budget, status, created_at")
        .order("created_at", { ascending: false })
        .limit(10),
    ]);

    const roles = (rolesRes.data ?? []).map((r) => r.role as string);
    if (!roles.some((r) => r === "admin" || r === "staff")) {
      throw new Error("Forbidden: this workspace is for staff accounts.");
    }

    return {
      profile: profileRes.data,
      roles,
      isAdmin: roles.includes("admin"),
      logs: (logsRes.data ?? []) as WorkLog[],
      inquiries: inquiriesRes.data ?? [],
      inquiryError: inquiriesRes.error?.message ?? null,
    };
  });

export const addWorkLog = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        work_date: z.string().min(4).max(20),
        hours: z.number().positive().max(24),
        notes: z.string().trim().max(500).default(""),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("work_logs").insert({
      user_id: context.userId,
      work_date: data.work_date,
      hours: data.hours,
      notes: data.notes,
    });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const deleteWorkLog = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("work_logs").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

async function assertAdmin(supabase: { rpc: (fn: string, args: object) => Promise<{ data: unknown }> }, userId: string) {
  const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (data !== true) throw new Error("Forbidden: admin access required.");
}

export const getTeam = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as never, context.userId);

    const [profilesRes, rolesRes, logsRes] = await Promise.all([
      context.supabase.from("profiles").select("*").order("created_at", { ascending: true }),
      context.supabase.from("user_roles").select("user_id, role"),
      context.supabase.from("work_logs").select("user_id, hours"),
    ]);

    const roleMap = new Map<string, string[]>();
    for (const row of rolesRes.data ?? []) {
      const list = roleMap.get(row.user_id) ?? [];
      list.push(row.role as string);
      roleMap.set(row.user_id, list);
    }

    const hoursMap = new Map<string, number>();
    for (const row of logsRes.data ?? []) {
      hoursMap.set(row.user_id, (hoursMap.get(row.user_id) ?? 0) + Number(row.hours));
    }

    const members = (profilesRes.data ?? []).map((p) => ({
      ...p,
      hourly_rate: Number(p.hourly_rate),
      roles: roleMap.get(p.id) ?? [],
      total_hours: hoursMap.get(p.id) ?? 0,
    }));

    return { members };
  });

export const inviteStaff = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        email: z.string().trim().email().max(255),
        password: z.string().min(10).max(72),
        full_name: z.string().trim().min(2).max(120),
        job_title: z.string().trim().min(2).max(120),
        hourly_rate: z.number().min(0).max(1000),
        role: z.enum(["admin", "staff"]),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as never, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
      user_metadata: {
        full_name: data.full_name,
        job_title: data.job_title,
        hourly_rate: data.hourly_rate,
      },
    });
    if (error || !created.user) throw new Error(error?.message ?? "Could not create the account.");

    await supabaseAdmin
      .from("profiles")
      .update({
        full_name: data.full_name,
        job_title: data.job_title,
        hourly_rate: data.hourly_rate,
      })
      .eq("id", created.user.id);

    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: created.user.id, role: data.role });
    if (roleError) throw new Error(roleError.message);

    return { ok: true as const, id: created.user.id };
  });

export const setStaffRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({ user_id: z.string().uuid(), role: z.enum(["admin", "staff"]) })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as never, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    await supabaseAdmin.from("user_roles").delete().eq("user_id", data.user_id);
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: data.user_id, role: data.role });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const removeStaff = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ user_id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as never, context.userId);
    if (data.user_id === context.userId) throw new Error("You cannot remove your own account.");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.deleteUser(data.user_id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const updateInquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({ id: z.string().uuid(), status: z.enum(["new", "in_progress", "closed"]) })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("contact_inquiries")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
