import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchLogin } from "@/api/auth/login";
import { LoginApiResponse, LoginValues } from "@/types";

const handleLoginSuccess = ({ isError }: LoginApiResponse) => {
  if (isError) {
    toast.error("E-mail ou mot de passe incorrect");
  } else {
    toast.success("Connexion réussie !");
  }
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (userData: LoginValues) => fetchLogin(userData),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: (data) => handleLoginSuccess(data),
  });
};
