import { AuthShell } from './AuthShell';

export function ForgotPasswordPage() {
  return (
    <AuthShell title="Forgot Password" subtitle="We'll send a secure reset link to your email">
      <form className="space-y-3">
        <input className="glass w-full rounded-xl px-3 py-2" placeholder="Work Email" />
        <button className="w-full rounded-xl bg-violet-500 py-2 text-white">Send Link</button>
      </form>
    </AuthShell>
  );
}
