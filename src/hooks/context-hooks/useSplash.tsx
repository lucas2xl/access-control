import { useContext } from 'react';
import { SplashContext } from '../../contexts/SplashContext';

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (context) {
    return context;
  }

  throw Error('Use this hook in UserProvider scope');
};
