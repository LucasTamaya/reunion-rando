import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { fetchRegister } from "@/api/auth/register";
import { RegisterValues } from "@/types";

const handleError = (err: AxiosError) => {
  if (err.response?.status === 409) {
    toast.error("L'utilisateur existe déjà");
  } else {
    toast.error("Une erreur est survenue");
  }
};

const handleSuccess = (navigate: NavigateFunction) => {
  toast.success("Compte crée avec succès !");
  redirectUserAfterTwoSec(navigate);
};

const redirectUserAfterTwoSec = (navigate: NavigateFunction) => {
  setTimeout(() => {
    navigate("/connexion");
  }, 2000);
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: RegisterValues) => fetchRegister(userData),
    onError: (err: AxiosError) => handleError(err),
    onSuccess: () => handleSuccess(navigate),
  });
};
