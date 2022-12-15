import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { fetchLogout } from '@/api/auth/logout';

const handleSuccess = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate('/');
};

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => fetchLogout(),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: () => handleSuccess(navigate),
  });
};
