import { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context) {
    return context;
  }

  throw Error('Use this hook in SettingsProvider scope');
};
