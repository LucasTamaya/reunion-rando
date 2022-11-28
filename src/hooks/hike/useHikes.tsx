import { useQuery } from "@tanstack/react-query";

import { fetchAllHikes } from "@/api/hike";
import toast from "react-hot-toast";

export const useHikes = () => {
  return useQuery({
    queryKey: ["hikes"],
    queryFn: () => fetchAllHikes(),
    onError: () => toast.error("Une erreur est survenue"),
  });
};
