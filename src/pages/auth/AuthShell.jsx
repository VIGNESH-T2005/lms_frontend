import { Link } from 'react-router-dom';

export function AuthShell({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient p-4">
      <div className="glass w-full max-w-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mb-4 text-sm text-slate-500">{subtitle}</p>
        {children}
        <div className="mt-4 text-sm"><Link to="/register" className="text-violet-500">Create account</Link></div>
      </div>
    </div>
  );
}
