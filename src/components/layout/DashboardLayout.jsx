import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { useAppStore } from '../../store/useAppStore';
import { motion } from 'framer-motion';

export function DashboardLayout() {
  const { darkMode } = useAppStore();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-hero-gradient p-4">
      <div className="mx-auto flex max-w-7xl gap-4">
        <Sidebar />
        <main className="flex-1 space-y-4">
          <Navbar />
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
