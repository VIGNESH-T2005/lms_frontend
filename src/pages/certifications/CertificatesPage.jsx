import { useQuery } from '@tanstack/react-query';
import { certificateService } from '../../services/certificateService';
import { CertificateCard } from '../../components/CertificateCard';

export function CertificatesPage() {
  const { data = [] } = useQuery({ queryKey: ['certificates'], queryFn: certificateService.getCertificates });
  return <div className="space-y-4"><div className="glass rounded-2xl p-4">Certificate Preview • Generation Status • Verification Tool</div><div className="grid gap-4 md:grid-cols-2">{data.map((c) => <CertificateCard key={c.id} certificate={c} />)}</div></div>;
}
