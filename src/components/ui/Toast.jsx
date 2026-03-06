import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '../../store/useAppStore';

export function ToastContainer() {
  const { toasts, removeToast } = useAppStore();

  useEffect(() => {
    const timers = toasts.map((t) => setTimeout(() => removeToast(t.id), 2500));
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  return (
    <div className="fixed right-4 top-4 z-[100] space-y-2">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass rounded-xl px-4 py-2 text-sm">
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
