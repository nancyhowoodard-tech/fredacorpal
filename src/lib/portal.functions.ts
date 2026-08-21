import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CANDIDATE_EMAIL_DOMAIN } from "@/lib/candidate-domain";

/**
 * Exchanges a candidate username + access code for a one-time sign-in token.
 * The code is only ever compared on the server; it never reaches the browser.
 */
export const candidateLogin = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        username: z.string().trim().min(2).max(60),
        code: z.string().trim().min(3).max(60),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const username = data.username.toLowerCase();

    const { data: credential } = await supabaseAdmin
      .from("candidate_credentials")
      .select("user_id, code")
      .eq("username", username)
      .maybeSingle();

    if (!credential || credential.code !== data.code) {
      throw new Error("Those candidate details could not be verified.");
    }

    const { data: candidate } = await supabaseAdmin
      .from("candidates")
      .select("email")
      .eq("id", credential.user_id)
      .maybeSingle();

    const email = candidate?.email || `${username}@${CANDIDATE_EMAIL_DOMAIN}`;

    const { data: link, error } = await supabaseAdmin.auth.admin.generateLink({
      type: "magiclink",
      email,
    });

    if (error || !link.properties?.hashed_token) {
      throw new Error("Sign-in could not be completed. Please contact your onboarding lead.");
    }

    return { email, tokenHash: link.properties.hashed_token };
  });

/**
 * Idempotent bootstrap of the first admin account and the initial candidate.
 * Does nothing once an admin already exists.
 */
export const bootstrapPortalAccounts = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { data: existingAdmins } = await supabaseAdmin
    .from("user_roles")
    .select("user_id")
    .eq("role", "admin")
    .limit(1);

  const created: string[] = [];

  if (!existingAdmins || existingAdmins.length === 0) {
    const email = "ithelpdesk.fredacorpal@gmail.com";
    const { data: admin, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: "admin001",
      email_confirm: true,
      user_metadata: { full_name: "IT HELP DESK", job_title: "IT Help Desk" },
    });
    if (error) throw new Error(error.message);
    const id = admin.user!.id;
    await supabaseAdmin
      .from("profiles")
      .upsert({ id, email, full_name: "IT HELP DESK", job_title: "IT Help Desk" });
    await supabaseAdmin.from("user_roles").insert({ user_id: id, role: "admin" });
    created.push("admin");
  }

  const { data: existingCandidate } = await supabaseAdmin
    .from("candidate_credentials")
    .select("user_id")
    .eq("username", "tiffanyp")
    .maybeSingle();

  if (!existingCandidate) {
    const email = `tiffanyp@${CANDIDATE_EMAIL_DOMAIN}`;
    const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: crypto.randomUUID() + crypto.randomUUID(),
      email_confirm: true,
      user_metadata: { full_name: "Tiffany P." },
    });
    if (error) throw new Error(error.message);
    const id = user.user!.id;
    await supabaseAdmin.from("candidates").insert({
      id,
      username: "tiffanyp",
      full_name: "Tiffany P.",
      email,
      position: "Customer Care Specialist",
      status: "onboarding",
    });
    await supabaseAdmin.from("user_roles").insert({ user_id: id, role: "candidate" });
    await supabaseAdmin
      .from("candidate_credentials")
      .insert({ user_id: id, username: "tiffanyp", code: "2443" });
    created.push("candidate");
  }

  return { created };
});
