import { useQuery } from "@tanstack/react-query";

import { fetchAllProviderUsers } from "@/api/user";

export const useProviderUsers = () => {
  return useQuery({
    queryKey: ["providerUsers"],
    queryFn: () => fetchAllProviderUsers(),
    refetchOnWindowFocus: false,
  });
};
