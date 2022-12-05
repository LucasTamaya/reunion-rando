import { NavigateFunction } from "react-router-dom";

export const redirectUserToLoginScreenAfterTwoSec = (
  navigate: NavigateFunction
) => {
  setTimeout(() => {
    navigate("/connexion");
  }, 2000);
};
