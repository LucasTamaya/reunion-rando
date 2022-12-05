import { fetchUserRole } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export const useUserRole = () => {
  return useQuery({
    queryKey: ["userRole"],
    queryFn: () => fetchUserRole(),
    cacheTime: 0,
  });
};
