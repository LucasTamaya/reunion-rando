import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: ReactNode;
}
export const RouterWrapper: React.FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
