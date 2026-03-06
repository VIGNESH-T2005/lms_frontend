import { NavLink } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UserGroupIcon, ClipboardDocumentCheckIcon, AcademicCapIcon, ChartBarIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const nav = [
  ['Dashboard', '/dashboard', HomeIcon],
  ['Courses', '/courses', BookOpenIcon],
  ['Enrollments', '/courses', UserGroupIcon],
  ['Attendance', '/attendance', ClipboardDocumentCheckIcon],
  ['Assessments', '/assessments', AcademicCapIcon],
  ['Certificates', '/certificates', ShieldCheckIcon],
  ['Analytics', '/analytics', ChartBarIcon],
  ['Admin Panel', '/admin', UserGroupIcon],
  ['Settings', '/settings', Cog6ToothIcon],
];

export function Sidebar() {
  return (
    <aside className="glass hidden w-64 flex-col rounded-2xl p-4 lg:flex">
      <h1 className="mb-6 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">LMS Enterprise</h1>
      <nav className="space-y-1">
        {nav.map(([label, to, Icon]) => (
          <NavLink key={to + label} to={to} className={({ isActive }) => `flex items-center gap-2 rounded-xl px-3 py-2 transition ${isActive ? 'bg-violet-500/20 text-violet-500' : 'hover:bg-white/40 dark:hover:bg-slate-700/40'}`}>
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
