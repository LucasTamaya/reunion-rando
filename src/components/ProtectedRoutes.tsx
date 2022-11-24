import { useUserRole } from "@/hooks/auth/useUserRole";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type AllowedRoles = "particulier" | "prestataire";

export const ProtectedRoutes: React.FC<{ allowedRole: AllowedRoles }> = ({
  allowedRole,
}) => {
  const { isLoading, data: user } = useUserRole();

  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return user?.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};
