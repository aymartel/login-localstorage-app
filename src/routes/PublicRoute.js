import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';

import { PRIVATE } from './path';

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();
  const { pathname } = useLocation()

  if (pathname === "/login" && isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}