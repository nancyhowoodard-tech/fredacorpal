import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Clock, DollarSign, Inbox, Users } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { supabase } from "@/integrations/supabase/client";
import { addWorkLog, deleteWorkLog, getDashboard, updateInquiryStatus } from "@/lib/staff.functions";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

const cardClass = "rounded-lg border border-border bg-card p-6";
const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none";

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className={cardClass}>
      <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 text-gold">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchDashboard = useServerFn(getDashboard);
  const createLog = useServerFn(addWorkLog);
  const removeLog = useServerFn(deleteWorkLog);
  const setStatus = useServerFn(updateInquiryStatus);
  const [error, setError] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["staff-dashboard"],
    queryFn: () => fetchDashboard(),
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["staff-dashboard"] });

  const logMutation = useMutation({
    mutationFn: (input: { work_date: string; hours: number; notes: string }) =>
      createLog({ data: input }),
    onSuccess: invalidate,
    onError: (e: Error) => setError(e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => removeLog({ data: { id } }),
    onSuccess: invalidate,
  });

  const statusMutation = useMutation({
    mutationFn: (input: { id: string; status: "new" | "in_progress" | "closed" }) =>
      setStatus({ data: input }),
    onSuccess: invalidate,
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/staff-portal", replace: true });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const hours = Number(fd.get("hours"));
    if (!Number.isFinite(hours) || hours <= 0 || hours > 24) {
      setError("Enter hours between 0 and 24.");
      return;
    }
    logMutation.mutate({
      work_date: String(fd.get("work_date")),
      hours,
      notes: String(fd.get("notes") ?? ""),
    });
    form.reset();
  };

  const rate = Number(data?.profile?.hourly_rate ?? 60);
  const logs = data?.logs ?? [];
  const totalHours = logs.reduce((sum, l) => sum + Number(l.hours), 0);
  const monthKey = new Date().toISOString().slice(0, 7);
  const monthHours = logs
    .filter((l) => l.work_date.startsWith(monthKey))
    .reduce((sum, l) => sum + Number(l.hours), 0);

  return (
    <div className="bg-surface py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Staff Dashboard</p>
            <h1 className="mt-3 font-display text-3xl font-bold">
              {data?.profile?.full_name || "Team member"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {data?.profile?.job_title} · ${rate.toFixed(2)}/hr
              {data?.isAdmin ? " · Administrator" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {data?.isAdmin ? (
              <Link
                to="/team"
                className="inline-flex min-h-11 items-center rounded-md border border-gold/60 px-5 text-sm font-semibold hover:bg-gold/10"
              >
                Team &amp; Roles
              </Link>
            ) : null}
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {isLoading ? (
          <p className="mt-10 text-sm text-muted-foreground">Loading your workspace…</p>
        ) : (
          <>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Stat icon={Clock} label="Hours this month" value={monthHours.toFixed(2)} />
              <Stat icon={Clock} label="Total hours logged" value={totalHours.toFixed(2)} />
              <Stat
                icon={DollarSign}
                label="Earnings this month"
                value={`$${(monthHours * rate).toFixed(2)}`}
              />
              <Stat
                icon={DollarSign}
                label="Total earnings"
                value={`$${(totalHours * rate).toFixed(2)}`}
              />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <section className={cardClass}>
                <h2 className="font-display text-lg font-bold">Log work hours</h2>
                <form onSubmit={onSubmit} className="mt-5 grid gap-4">
                  <div>
                    <label htmlFor="work_date" className="text-sm font-semibold">
                      Date
                    </label>
                    <input
                      id="work_date"
                      name="work_date"
                      type="date"
                      required
                      defaultValue={new Date().toISOString().slice(0, 10)}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="hours" className="text-sm font-semibold">
                      Hours worked
                    </label>
                    <input
                      id="hours"
                      name="hours"
                      type="number"
                      step="0.25"
                      min="0.25"
                      max="24"
                      required
                      className={fieldClass}
                      placeholder="7.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="text-sm font-semibold">
                      Notes
                    </label>
                    <input
                      id="notes"
                      name="notes"
                      className={fieldClass}
                      placeholder="Client onboarding, campaign QA…"
                    />
                  </div>
                  <Button type="submit" disabled={logMutation.isPending}>
                    {logMutation.isPending ? "Saving…" : "Add Entry"}
                  </Button>
                  {error ? <p className="text-xs text-destructive">{error}</p> : null}
                </form>
              </section>

              <section className={cardClass}>
                <h2 className="font-display text-lg font-bold">Recent entries</h2>
                {logs.length === 0 ? (
                  <p className="mt-4 text-sm text-muted-foreground">No hours logged yet.</p>
                ) : (
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-xs tracking-wider text-muted-foreground uppercase">
                        <tr>
                          <th className="pb-3">Date</th>
                          <th className="pb-3">Hours</th>
                          <th className="pb-3">Earned</th>
                          <th className="pb-3">Notes</th>
                          <th className="pb-3" />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {logs.slice(0, 12).map((log) => (
                          <tr key={log.id}>
                            <td className="py-3">{log.work_date}</td>
                            <td className="py-3">{Number(log.hours).toFixed(2)}</td>
                            <td className="py-3 font-semibold text-gold">
                              ${(Number(log.hours) * rate).toFixed(2)}
                            </td>
                            <td className="py-3 text-muted-foreground">{log.notes || "—"}</td>
                            <td className="py-3 text-right">
                              <button
                                onClick={() => deleteMutation.mutate(log.id)}
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

            <section className={`${cardClass} mt-8`}>
              <div className="flex items-center gap-3">
                <Inbox className="h-4 w-4 text-gold" aria-hidden="true" />
                <h2 className="font-display text-lg font-bold">Latest contact inquiries</h2>
              </div>
              {(data?.inquiries ?? []).length === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">No inquiries yet.</p>
              ) : (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs tracking-wider text-muted-foreground uppercase">
                      <tr>
                        <th className="pb-3">Received</th>
                        <th className="pb-3">Contact</th>
                        <th className="pb-3">Service</th>
                        <th className="pb-3">Budget</th>
                        <th className="pb-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {(data?.inquiries ?? []).map((i) => (
                        <tr key={i.id}>
                          <td className="py-3">{new Date(i.created_at).toLocaleDateString()}</td>
                          <td className="py-3">
                            <span className="block font-semibold">{i.name}</span>
                            <span className="text-muted-foreground">
                              {i.company} · {i.email}
                            </span>
                          </td>
                          <td className="py-3">{i.service}</td>
                          <td className="py-3">{i.budget}</td>
                          <td className="py-3">
                            <select
                              value={i.status}
                              onChange={(e) =>
                                statusMutation.mutate({
                                  id: i.id,
                                  status: e.target.value as "new" | "in_progress" | "closed",
                                })
                              }
                              className="rounded-md border border-input bg-background px-2 py-1 text-xs"
                            >
                              <option value="new">New</option>
                              <option value="in_progress">In progress</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {data?.isAdmin ? (
              <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-gold" aria-hidden="true" />
                Manage staff accounts, roles and hourly rates in{" "}
                <Link to="/team" className="font-semibold text-gold hover:underline">
                  Team &amp; Roles
                </Link>
                .
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
