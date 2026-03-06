import { useQuery } from '@tanstack/react-query';
import { assessmentService } from '../../services/assessmentService';
import { AssessmentCard } from '../../components/AssessmentCard';

export function AssessmentsPage() {
  const { data = [] } = useQuery({ queryKey: ['assessments'], queryFn: assessmentService.getAssessments });
  return <div className="space-y-4"><div className="glass rounded-2xl p-4">Quiz Builder • Timer Config • Question Stepper</div><div className="grid gap-4 md:grid-cols-2">{data.map((a) => <AssessmentCard key={a.id} assessment={a} />)}</div><div className="glass rounded-2xl p-4">Leaderboard: Maya (98), Liam (94), Noor (91)</div></div>;
}
