import { useEffect } from 'react';
import { useAuthContext } from '../contexts/authContext';

export const LogoutPage = () => {
  const {logout} = useAuthContext();
  useEffect(() => logout());
  return null;
}


