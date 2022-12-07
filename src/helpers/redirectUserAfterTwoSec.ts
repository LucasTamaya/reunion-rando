import { NavigateFunction } from "react-router-dom";

export const redirectUserAfterTwoSec = (
  navigate: NavigateFunction,
  path: string
) => {
  setTimeout(() => {
    navigate(path);
  }, 2000);
};
