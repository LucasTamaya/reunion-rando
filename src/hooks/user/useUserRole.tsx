import { useQuery } from "@tanstack/react-query";

import { fetchUserRole } from "@/api/user";

export const useUserRole = () => {
  return useQuery({
    queryKey: ["userRole"],
    queryFn: () => fetchUserRole(),
    onError: () => localStorage.clear(),
    cacheTime: 0,
  });
};
