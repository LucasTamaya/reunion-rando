import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { fetchAddActivity } from '@/api/activity';
import { redirectUserAfterTwoSec } from '@/helpers/redirectUserAfterTwoSec';

const handleSuccess = (navigate: NavigateFunction) => {
  toast.success('Activité crée avec succès !');
  redirectUserAfterTwoSec(navigate, '/gerer-mes-activites');
};

export const useAddActivity = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (activityData: FormData) => fetchAddActivity(activityData),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: () => handleSuccess(navigate),
  });
};
