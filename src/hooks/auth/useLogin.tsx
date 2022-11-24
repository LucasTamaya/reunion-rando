import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { fetchLogin } from "@/api/auth/login";
import { LoginApiResponse, LoginValues } from "@/types";

const handleSuccess = (
  { isError, role }: LoginApiResponse,
  navigate: NavigateFunction
) => {
  if (isError) {
    toast.error("E-mail ou mot de passe incorrect");
  }

  toast.success("Connexion réussie !");
  switch (role) {
    case "particulier":
      navigate("/dashboard/particulier");
      break;
    case "prestataire":
      navigate("/dashboard/prestataire");
      break;
    default:
      navigate("/login");
  }
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: LoginValues) => fetchLogin(userData),
    onError: () => toast.error("Une erreur est survenue"),
    onSuccess: (data) => handleSuccess(data, navigate),
  });
};
