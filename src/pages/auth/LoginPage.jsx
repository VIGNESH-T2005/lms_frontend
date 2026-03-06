import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthShell } from './AuthShell';
import { useAppStore } from '../../store/useAppStore';

export function LoginPage() {
  const [email, setEmail] = useState('admin@lms.com');
  const [password, setPassword] = useState('');
  const login = useAppStore((s) => s.login);
  const navigate = useNavigate();

  const submit = (e) => { e.preventDefault(); if (!email || !password) return; login(email); navigate('/dashboard'); };

  return (
    <AuthShell title="Welcome Back" subtitle="Sign in to continue to LMS Enterprise">
      <form onSubmit={submit} className="space-y-3">
        <input className="glass w-full rounded-xl px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="glass w-full rounded-xl px-3 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="w-full rounded-xl bg-violet-500 py-2 text-white">Login</button>
      </form>
      <Link to="/forgot-password" className="mt-3 inline-block text-sm text-violet-500">Forgot password?</Link>
    </AuthShell>
  );
}
