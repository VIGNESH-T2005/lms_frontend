import { Navigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
