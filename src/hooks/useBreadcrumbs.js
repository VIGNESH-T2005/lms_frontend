import { useLocation } from 'react-router-dom';

export function useBreadcrumbs() {
  const { pathname } = useLocation();
  return pathname.split('/').filter(Boolean);
}
