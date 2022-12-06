import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchAllProviderActivities } from "@/api/activity";

export const useProviderActivities = () => {
  return useQuery({
    queryKey: ["providerActivities"],
    queryFn: () => fetchAllProviderActivities(),
    onError: () => toast.error("Une erreur est survenue"),
    refetchOnWindowFocus: false,
  });
};
