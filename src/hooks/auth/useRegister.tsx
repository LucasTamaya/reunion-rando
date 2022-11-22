import { useMutation } from "@tanstack/react-query";

import { fetchRegister } from "@/api/auth/register";
import { RegisterValues } from "@/types";

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData: RegisterValues) => fetchRegister(userData),
  });
};
