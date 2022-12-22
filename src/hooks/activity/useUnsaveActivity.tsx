import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { fetchUnsaveActivity } from '@/api/activity';
import { refreshActivitiesData } from '@/helpers/refreshActivitiesData';

const handleSuccess = (activityId: string, queryClient: QueryClient) => {
  toast.success('Activité retirée des favoris');
  refreshActivitiesData(activityId, 'savedActivities', queryClient);
};

export const useUnsaveActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (activityId: string) => fetchUnsaveActivity(activityId),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: (activityId) => handleSuccess(activityId, queryClient),
  });
};
