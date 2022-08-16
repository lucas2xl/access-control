import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppNavigation } from './src/navigation';
import { theme } from './src/utils/nativeBaseTheme';
import { SettingsContextProvider } from './src/contexts/SettingsProvider';
import { UserContextProvider } from './src/contexts/UserProvider';

export default function App() {
  //TODO: if the fonts are loading you should use AppLoading to wait
  return (
    <NativeBaseProvider config={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SettingsContextProvider>
          <UserContextProvider>
            <AppNavigation />
          </UserContextProvider>
        </SettingsContextProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
