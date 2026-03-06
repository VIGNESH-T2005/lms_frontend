import { stats, engagementData, courses } from '../../services/mockData';
import { StatCard } from '../../components/StatCard';
import { AnimatedChart } from '../../components/charts/AnimatedChart';

export function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><AnimatedChart data={engagementData} type="line" /></div>
        <div className="glass rounded-2xl p-4"><h3 className="mb-2 font-semibold">Upcoming Classes</h3><ul className="space-y-2 text-sm">{courses.map((c) => <li key={c.id} className="rounded-lg bg-white/40 p-2 dark:bg-slate-800/40">{c.title} • {c.instructor}</li>)}</ul></div>
      </div>
      <div className="glass rounded-2xl p-4"><h3 className="mb-3 font-semibold">Recent Activity Timeline</h3><div className="space-y-2 text-sm"><p>• Maya completed Module 6 in Enterprise React</p><p>• New assessment published in Security Baseline</p><p>• 24 certificates generated this week</p></div></div>
    </div>
  );
}
