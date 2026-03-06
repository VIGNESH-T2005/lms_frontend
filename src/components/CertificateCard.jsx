export function CertificateCard({ certificate }) {
  return <div className="glass rounded-2xl p-4"><h3 className="font-semibold">{certificate.learner}</h3><p className="text-sm">{certificate.course}</p><p className="text-sm">Status: <span className="text-cyan-500">{certificate.status}</span></p><button className="mt-3 rounded-lg bg-violet-500 px-3 py-1 text-sm text-white">Download</button></div>;
}
