import { engagementData } from '../../services/mockData';
import { AnimatedChart } from '../../components/charts/AnimatedChart';

export function AnalyticsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <AnimatedChart data={engagementData} type="line" />
      <AnimatedChart data={engagementData} type="area" />
      <div className="glass rounded-2xl p-4">Interactive progress rings and KPI comparisons.</div>
      <div className="glass rounded-2xl p-4">Assessment performance segmentation by cohorts.</div>
    </div>
  );
}
