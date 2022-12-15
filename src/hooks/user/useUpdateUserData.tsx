import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { fetchUpdateUserData } from '@/api/user';

const handleSuccess = () => {
  toast.success('Vos informations ont bien été mises à jour !');
  window.location.reload();
};

export const useUpdateUserData = () => {
  return useMutation({
    mutationFn: (userData: FormData) => fetchUpdateUserData(userData),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: handleSuccess,
  });
};
