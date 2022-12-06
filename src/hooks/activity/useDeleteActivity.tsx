import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchDeleteActivity } from "@/api/activity";
import { Activity } from "@/types";

const handleSuccess = (activityId: string, queryClient: QueryClient) => {
  toast.success("Activité supprimée avec succès !");
  refreshData(activityId, queryClient);
};

const refreshData = (activityId: string, queryClient: QueryClient) => {
  // access the previous data of the query that has the key 'providerActivities'
  // and filter the array to delete the selected activity
  queryClient.setQueryData(["providerActivities"], (prev: any) => {
    const updatedActivities = prev.filter(
      (activity: Activity) => activity.id !== activityId
    );
    return updatedActivities;
  });
};

export const useDeleteActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (activityId: string) => fetchDeleteActivity(activityId),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: (activityId) => handleSuccess(activityId, queryClient),
  });
};
