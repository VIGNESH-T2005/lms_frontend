import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useAppStore } from '../../store/useAppStore';

export function Navbar() {
  const { darkMode, toggleTheme, user, notifications } = useAppStore();
  return (
    <header className="glass flex items-center justify-between rounded-2xl px-4 py-3">
      <div>
        <p className="text-xs text-slate-500">Welcome back</p>
        <h2 className="font-semibold">{user.name}</h2>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleTheme} className="rounded-lg p-2 hover:bg-white/40 dark:hover:bg-slate-700/40">{darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}</button>
        <button className="relative rounded-lg p-2 hover:bg-white/40 dark:hover:bg-slate-700/40"><BellIcon className="h-5 w-5" /><span className="absolute -right-1 -top-1 rounded-full bg-violet-500 px-1 text-[10px]">{notifications.length}</span></button>
        <div className="rounded-lg bg-violet-500/20 px-3 py-1 text-sm">{user.role}</div>
      </div>
    </header>
  );
}
