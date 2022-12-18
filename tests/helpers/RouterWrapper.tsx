import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
