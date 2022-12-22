import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';

import { fetchSaveActivity } from '@/api/activity';

const handleError = (err: AxiosError) => {
  const hasAlreadyBeenSaved = err.response?.status === 409;
  if (hasAlreadyBeenSaved) {
    toast.success("L'activité a déjà été ajoutée aux favoris");
  } else {
    toast.error('Une erreur est survenue, veuillez réessayer');
  }
};

export const useSaveActivity = () => {
  return useMutation({
    mutationFn: (activityId: string) => fetchSaveActivity(activityId),
    onError: (err: AxiosError) => handleError(err),
    onSuccess: () => toast.success('Activité ajoutée aux favoris !'),
  });
};
