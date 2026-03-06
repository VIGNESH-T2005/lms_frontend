import { useAppStore } from '../../store/useAppStore';

export function SettingsPage() {
  const { darkMode, toggleTheme } = useAppStore();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass rounded-2xl p-4">Profile settings form fields</div>
      <div className="glass rounded-2xl p-4">Notification preferences toggles</div>
      <div className="glass rounded-2xl p-4">Security settings: MFA, password reset, session policy</div>
      <div className="glass rounded-2xl p-4"><p className="mb-2 font-semibold">Theme</p><button onClick={toggleTheme} className="rounded-lg bg-violet-500 px-3 py-1 text-white">Current: {darkMode ? 'Dark' : 'Light'}</button></div>
    </div>
  );
}
