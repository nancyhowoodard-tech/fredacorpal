import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { getTeam, inviteStaff, removeStaff, setStaffRole } from "@/lib/staff.functions";

export const Route = createFileRoute("/_authenticated/team")({
  component: Team,
});

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none";

function Team() {
  const queryClient = useQueryClient();
  const fetchTeam = useServerFn(getTeam);
  const invite = useServerFn(inviteStaff);
  const setRole = useServerFn(setStaffRole);
  const remove = useServerFn(removeStaff);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["staff-team"],
    queryFn: () => fetchTeam(),
    retry: false,
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["staff-team"] });

  const inviteMutation = useMutation({
    mutationFn: (input: {
      email: string;
      password: string;
      full_name: string;
      job_title: string;
      hourly_rate: number;
      role: "admin" | "staff";
    }) => invite({ data: input }),
    onSuccess: () => {
      setMessage({ kind: "ok", text: "Staff account created. Share the credentials securely." });
      invalidate();
    },
    onError: (e: Error) => setMessage({ kind: "error", text: e.message }),
  });

  const roleMutation = useMutation({
    mutationFn: (input: { user_id: string; role: "admin" | "staff" }) => setRole({ data: input }),
    onSuccess: invalidate,
    onError: (e: Error) => setMessage({ kind: "error", text: e.message }),
  });

  const removeMutation = useMutation({
    mutationFn: (user_id: string) => remove({ data: { user_id } }),
    onSuccess: invalidate,
    onError: (e: Error) => setMessage({ kind: "error", text: e.message }),
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    const fd = new FormData(e.currentTarget);
    inviteMutation.mutate({
      email: String(fd.get("email")),
      password: String(fd.get("password")),
      full_name: String(fd.get("full_name")),
      job_title: String(fd.get("job_title")),
      hourly_rate: Number(fd.get("hourly_rate")),
      role: String(fd.get("role")) as "admin" | "staff",
    });
    e.currentTarget.reset();
  };

  if (error) {
    return (
      <div className="container-x py-20">
        <h1 className="font-display text-2xl font-bold">Admin access required</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Only Fredacorpal™ administrators can manage staff accounts.
        </p>
        <Link to="/dashboard" className="mt-6 inline-block font-semibold text-gold hover:underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Administration</p>
            <h1 className="mt-3 font-display text-3xl font-bold">Team &amp; Roles</h1>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex min-h-11 items-center rounded-md border border-gold/60 px-5 text-sm font-semibold hover:bg-gold/10"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold">Create a staff account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Accounts are admin-created only — there is no public signup.
            </p>
            <form onSubmit={onSubmit} className="mt-5 grid gap-4">
              <div>
                <label htmlFor="full_name" className="text-sm font-semibold">
                  Full name
                </label>
                <input id="full_name" name="full_name" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-semibold">
                  Temporary password
                </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  minLength={10}
                  required
                  className={fieldClass}
                  placeholder="At least 10 characters"
                />
              </div>
              <div>
                <label htmlFor="job_title" className="text-sm font-semibold">
                  Job title
                </label>
                <input
                  id="job_title"
                  name="job_title"
                  required
                  defaultValue="Team Member"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="hourly_rate" className="text-sm font-semibold">
                  Hourly rate (USD)
                </label>
                <input
                  id="hourly_rate"
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
                <label htmlFor="role" className="text-sm font-semibold">
                  Role
                </label>
                <select id="role" name="role" defaultValue="staff" className={fieldClass}>
                  <option value="staff">Staff</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <Button type="submit" disabled={inviteMutation.isPending}>
                {inviteMutation.isPending ? "Creating…" : "Create Account"}
              </Button>
              {message ? (
                <p
                  className={
                    message.kind === "ok"
                      ? "text-xs font-semibold text-gold"
                      : "text-xs text-destructive"
                  }
                >
                  {message.text}
                </p>
              ) : null}
            </form>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold">Team members</h2>
            {isLoading ? (
              <p className="mt-4 text-sm text-muted-foreground">Loading team…</p>
            ) : (
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs tracking-wider text-muted-foreground uppercase">
                    <tr>
                      <th className="pb-3">Member</th>
                      <th className="pb-3">Rate</th>
                      <th className="pb-3">Hours</th>
                      <th className="pb-3">Earned</th>
                      <th className="pb-3">Role</th>
                      <th className="pb-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(data?.members ?? []).map((m) => (
                      <tr key={m.id}>
                        <td className="py-3">
                          <span className="block font-semibold">{m.full_name || "—"}</span>
                          <span className="text-muted-foreground">{m.email}</span>
                        </td>
                        <td className="py-3">${m.hourly_rate.toFixed(2)}</td>
                        <td className="py-3">{m.total_hours.toFixed(2)}</td>
                        <td className="py-3 font-semibold text-gold">
                          ${(m.total_hours * m.hourly_rate).toFixed(2)}
                        </td>
                        <td className="py-3">
                          <select
                            value={m.roles.includes("admin") ? "admin" : "staff"}
                            onChange={(e) =>
                              roleMutation.mutate({
                                user_id: m.id,
                                role: e.target.value as "admin" | "staff",
                              })
                            }
                            className="rounded-md border border-input bg-background px-2 py-1 text-xs"
                          >
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                          </select>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => removeMutation.mutate(m.id)}
                            className="text-xs text-muted-foreground hover:text-destructive"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
