import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { fetchRegister } from "@/api/auth/register";
import { RegisterValues } from "@/types";

const handleRegisterError = (err: AxiosError) => {
  if (err.response?.status === 409) {
    toast.error("L'utilisateur existe déjà");
  } else {
    toast.error("Une erreur est survenue");
  }
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData: RegisterValues) => fetchRegister(userData),
    onError: (err: AxiosError) => {
      handleRegisterError(err);
    },
    onSuccess: () => toast.success("Compte crée avec succès !"),
  });
};
