import { AppRoutes } from './routes/AppRoutes';
import { ToastContainer } from './components/ui/Toast';
import { CommandPalette } from './components/ui/CommandPalette';

export default function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
      <CommandPalette />
    </>
  );
}
