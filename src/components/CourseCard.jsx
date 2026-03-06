import { motion } from 'framer-motion';

export function CourseCard({ course, onEnroll, onOpen }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className="glass rounded-2xl p-4">
      <div className="mb-3 h-28 rounded-xl bg-gradient-to-r from-violet-500/30 to-cyan-400/30" />
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-slate-500">{course.instructor}</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-300/60 dark:bg-slate-700/60"><div className="h-full bg-violet-500" style={{ width: `${course.progress}%` }} /></div>
      <div className="mt-4 flex gap-2">
        <button onClick={onOpen} className="rounded-lg bg-white/60 px-3 py-1 text-sm dark:bg-slate-700/60">Details</button>
        <button onClick={onEnroll} className="rounded-lg bg-violet-500 px-3 py-1 text-sm text-white">Enroll</button>
      </div>
    </motion.div>
  );
}
