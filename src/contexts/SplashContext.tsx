import { createContext } from 'react';

export type SplashContextProps = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const SplashContext = createContext<SplashContextProps | null>(null);
