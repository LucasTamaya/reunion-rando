import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchAddActivity } from "@/api/activity";
import { NewActivityValues } from "@/types";

export const useAddActivity = () => {
  return useMutation({
    mutationFn: (activityData: NewActivityValues) =>
      fetchAddActivity(activityData),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: () => toast.success("Activité crée avec succès !"),
  });
};
