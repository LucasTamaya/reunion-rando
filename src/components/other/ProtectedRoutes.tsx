import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useUserRole } from "@/hooks/user/useUserRole";

type AllowedRoles = "particulier" | "prestataire";

export const ProtectedRoutes: React.FC<{ allowedRole: AllowedRoles }> = ({
  allowedRole,
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

  return user?.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};
