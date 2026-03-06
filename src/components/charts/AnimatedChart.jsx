import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line, Legend } from 'recharts';

export function AnimatedChart({ data, type = 'area' }) {
  return (
    <div className="glass h-72 rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        {type === 'area' ? (
          <AreaChart data={data}><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/><stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" opacity={0.2}/><XAxis dataKey="name"/><YAxis/><Tooltip/><Area type="monotone" dataKey="engagement" stroke="#8b5cf6" fill="url(#g1)"/></AreaChart>
        ) : (
          <LineChart data={data}><CartesianGrid strokeDasharray="3 3" opacity={0.2}/><XAxis dataKey="name"/><YAxis/><Tooltip/><Legend/><Line type="monotone" dataKey="engagement" stroke="#8b5cf6"/><Line type="monotone" dataKey="completion" stroke="#06b6d4"/></LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
