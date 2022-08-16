import { createContext } from 'react';
import { Settings } from '../interfaces/settings';

export type SettingsContextProps = {
  settings: Settings | null;
  updateSettings: (args: Partial<Settings>) => void;
};

export const SettingsContext = createContext<SettingsContextProps | null>(null);
