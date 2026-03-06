export function AttendanceTable({ rows }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <table className="w-full text-sm">
        <thead className="bg-white/40 dark:bg-slate-800/40"><tr><th className="p-3 text-left">Student</th><th>Present</th><th>Absent</th><th>Rate</th></tr></thead>
        <tbody>
          {rows.map((r) => <tr key={r.student} className="border-t border-white/30 dark:border-slate-700/40"><td className="p-3">{r.student}</td><td className="text-center">{r.present}</td><td className="text-center">{r.absent}</td><td className="text-center">{Math.round((r.present / (r.present + r.absent)) * 100)}%</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
