import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchAllActivities } from "@/api/activity";

export const useActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => fetchAllActivities(),
    onError: () => toast.error("Une erreur est survenue"),
    refetchOnWindowFocus: false,
  });
};
