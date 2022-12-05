import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchAddActivity } from "@/api/activity";

export const useAddActivity = () => {
  return useMutation({
    mutationFn: (activityData: FormData) => fetchAddActivity(activityData),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: () => toast.success("Activité crée avec succès !"),
  });
};
