import { motion } from 'framer-motion';

export function StatCard({ label, value, trend }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl bg-gradient-to-br from-white/50 to-white/20 p-4 dark:from-slate-800/50 dark:to-slate-900/10">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-emerald-500">{trend}</p>
    </motion.div>
  );
}
