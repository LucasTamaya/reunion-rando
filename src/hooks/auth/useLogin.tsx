import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { fetchLogin } from '@/api/auth/login';
import { LoginApiResponse, LoginValues } from '@/types';
import { redirectUserAfterTwoSec } from '../../helpers/redirectUserAfterTwoSec';

const handleSuccess = (
  { isError, role, id }: LoginApiResponse,
  navigate: NavigateFunction
) => {
  if (isError) {
    toast.error('E-mail ou mot de passe incorrect');
  }

  if (role) {
    toast.success('Connexion réussie !');
    localStorage.setItem('role', role);
    localStorage.setItem('userId', id);
    redirectUserAfterTwoSec(navigate, '/');
  }
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: LoginValues) => fetchLogin(userData),
    onError: () => toast.error('Une erreur est survenue, veuillez réessayer'),
    onSuccess: (data) => handleSuccess(data, navigate),
  });
};
