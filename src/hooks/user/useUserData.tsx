import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { fetchUserData } from "@/api/user";
import { redirectUserAfterTwoSec } from "@/helpers/redirectUserAfterTwoSec";

const handleError = (navigate: NavigateFunction) => {
  toast.error("Une erreur est survenue");
  redirectUserAfterTwoSec(navigate, "/connexion");
};

export const useUserData = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserData(),
    onError: () => handleError(navigate),
    refetchOnWindowFocus: false,
  });
};
