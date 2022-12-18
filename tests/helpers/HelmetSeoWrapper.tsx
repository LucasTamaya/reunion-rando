import { HelmetProvider } from 'react-helmet-async';
import { ReactNode } from 'react';

const helmetContext = {};

export const HelmetSeoWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <HelmetProvider context={helmetContext}>{children}</HelmetProvider>;
};
