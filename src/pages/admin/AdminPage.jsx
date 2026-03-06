export function AdminPage() {
  const rows = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1, user: `User ${i + 1}`, role: i % 2 ? 'Student' : 'Instructor', status: i % 3 ? 'Active' : 'Pending' }));
  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-4">User / Course / Instructor Management and System Reports</div>
      <div className="glass overflow-hidden rounded-2xl">
        <table className="w-full text-sm"><thead className="bg-white/40 dark:bg-slate-800/40"><tr><th className="p-3 text-left">Name</th><th>Role</th><th>Status</th></tr></thead><tbody>{rows.map((r) => <tr key={r.id} className="border-t border-white/30 dark:border-slate-700/40"><td className="p-3">{r.user}</td><td className="text-center">{r.role}</td><td className="text-center">{r.status}</td></tr>)}</tbody></table>
      </div>
      <div className="flex justify-end gap-2"><button className="rounded-lg bg-white/50 px-3 py-1 dark:bg-slate-700/50">Prev</button><button className="rounded-lg bg-violet-500 px-3 py-1 text-white">Next</button></div>
    </div>
  );
}
