import { create } from 'zustand';

export const useAppStore = create((set) => ({
  user: { name: 'Alex Carter', role: 'Admin' },
  isAuthenticated: true,
  darkMode: true,
  toasts: [],
  notifications: [
    { id: 1, text: 'New course enrollment request', time: '2m ago' },
    { id: 2, text: 'Assessment graded for UI Foundations', time: '12m ago' },
  ],
  toggleTheme: () => set((s) => ({ darkMode: !s.darkMode })),
  addToast: (message) =>
    set((s) => ({ toasts: [...s.toasts, { id: Date.now(), message }] })),
  removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  login: (email) => set({ isAuthenticated: true, user: { name: email.split('@')[0], role: 'Learner' } }),
  logout: () => set({ isAuthenticated: false }),
}));
