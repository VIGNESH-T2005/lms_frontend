import { AuthShell } from './AuthShell';

export function RegisterPage() {
  return (
    <AuthShell title="Create Account" subtitle="Set up your enterprise learning access">
      <form className="space-y-3">
        <input className="glass w-full rounded-xl px-3 py-2" placeholder="Full Name" />
        <input className="glass w-full rounded-xl px-3 py-2" placeholder="Email" />
        <input className="glass w-full rounded-xl px-3 py-2" type="password" placeholder="Password" />
        <button className="w-full rounded-xl bg-violet-500 py-2 text-white">Register</button>
      </form>
    </AuthShell>
  );
}
