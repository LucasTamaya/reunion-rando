import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { fetchUpdateActivity } from '@/api/activity';
import { redirectUserAfterTwoSec } from '@/helpers/redirectUserAfterTwoSec';

const handleSuccess = (navigate: NavigateFunction) => {
  toast.success('Activité modifiée avec succès !');
  redirectUserAfterTwoSec(navigate, '/gerer-mes-activites');
};

export const useUpdateActivity = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (activityData: FormData) => fetchUpdateActivity(activityData),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: () => handleSuccess(navigate),
  });
};
