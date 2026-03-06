import { Dialog, DialogPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const links = [
  ['Dashboard', '/dashboard'], ['Courses', '/courses'], ['Attendance', '/attendance'], ['Assessments', '/assessments'], ['Certificates', '/certificates'], ['Analytics', '/analytics'], ['Admin', '/admin'], ['Settings', '/settings'],
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((v) => !v); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />
      <div className="fixed inset-0 flex items-start justify-center p-6">
        <DialogPanel className="glass w-full max-w-lg rounded-2xl p-3">
          <input className="w-full rounded-xl bg-white/50 p-3 dark:bg-slate-800/50" placeholder="Jump to..." />
          <div className="mt-2 space-y-1">
            {links.map(([label, path]) => (
              <button key={path} className="w-full rounded-lg p-2 text-left hover:bg-white/40 dark:hover:bg-slate-700/30" onClick={() => { navigate(path); setOpen(false); }}>
                {label}
              </button>
            ))}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
