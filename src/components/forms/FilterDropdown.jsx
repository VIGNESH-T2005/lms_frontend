export function FilterDropdown({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange} className="glass rounded-xl px-3 py-2 outline-none">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
}
