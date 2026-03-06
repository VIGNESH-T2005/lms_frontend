export function AssessmentCard({ assessment }) {
  return <div className="glass rounded-2xl p-4"><h3 className="font-semibold">{assessment.title}</h3><p className="text-sm">Attempts: {assessment.attempts}</p><p className="text-sm text-violet-500">Avg Score: {assessment.avgScore}%</p></div>;
}
