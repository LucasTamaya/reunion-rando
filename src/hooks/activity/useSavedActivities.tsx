import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { fetchSavedActivities } from '@/api/activity';

export const useSavedActivities = () => {
  return useQuery({
    queryKey: ['savedActivities'],
    queryFn: () => fetchSavedActivities(),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
  });
};
