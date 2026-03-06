export function SearchBar({ value, onChange }) {
  return <input value={value} onChange={onChange} placeholder="Search..." className="glass w-full rounded-xl px-4 py-2 outline-none" />;
}
