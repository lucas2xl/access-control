import React, { ReactNode, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { SettingsContext, SettingsContextProps } from './SettingsContext';
import { getItem, setItem } from '../utils/localStorage';
import { Settings } from '../interfaces/settings';

type ProviderProps = {
  children: ReactNode;
};

export const defaultSettings: Settings = {
  darkMode: Appearance.getColorScheme() === 'dark',
  viewType: 'list',
  language: 'en',
};

export const SettingsContextProvider = ({ children }: ProviderProps) => {
  const [settings, setSettings] = useState<Settings | null>(null);

  const updateSettings = (newData: Partial<Settings> | null) => {
    setSettings((prevState) =>
      prevState
        ? { ...prevState, ...newData }
        : { ...defaultSettings, ...newData },
    );
  };

  useEffect(() => {
    (async () => {
      const data = await getItem('settings');
      if (data) setSettings(JSON.parse(data));
      else setSettings(defaultSettings);
    })();
  }, []);

  useEffect(() => {
    const settingsClone = { ...settings };
    setItem('settings', JSON.stringify(settingsClone));
  }, [settings]);

  const value: SettingsContextProps = { settings, updateSettings };
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
