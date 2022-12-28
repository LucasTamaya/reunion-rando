import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useUserRole } from '@/hooks/user/useUserRole';

type Roles =
  | ['prestataire' | 'particulier' | undefined]
  | ['prestataire', 'particulier' | undefined];

export const ProtectedRoutes: React.FC<{ allowedRoles: Roles }> = ({
  allowedRoles,
}) => {
  const { isLoading, data: user } = useUserRole();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
      </div>
    );
  }

  return allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};
