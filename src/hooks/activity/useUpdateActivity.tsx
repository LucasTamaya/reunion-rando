import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchUpdateActivity } from "@/api/activity";

export const useUpdateActivity = () => {
  return useMutation({
    mutationFn: (activityData: FormData) => fetchUpdateActivity(activityData),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: () => toast.success("Activité crée avec succès !"),
  });
};
