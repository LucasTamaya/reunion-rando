import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { fetchDeleteActivity } from '@/api/activity';
import { refreshActivitiesData } from '@/helpers/refreshActivitiesData';

interface DeleteActivityVariables {
  activityId: string;
  cloudinaryPublicId: string;
}

const handleSuccess = (activityId: string, queryClient: QueryClient) => {
  toast.success('Activité supprimée avec succès !');
  refreshActivitiesData(activityId, 'providerActivities', queryClient);
};

export const useDeleteActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ activityId, cloudinaryPublicId }: DeleteActivityVariables) =>
      fetchDeleteActivity(activityId, cloudinaryPublicId),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: (activityId) => handleSuccess(activityId, queryClient),
  });
};
