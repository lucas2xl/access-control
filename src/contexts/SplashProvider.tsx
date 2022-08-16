import React, { ReactNode, useState } from 'react';
import { SplashContext } from './SplashContext';

type ProviderProps = {
  children: ReactNode;
};

export const SplashContextProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <SplashContext.Provider value={{ loading, setLoading }}>
      {children}
    </SplashContext.Provider>
  );
};
