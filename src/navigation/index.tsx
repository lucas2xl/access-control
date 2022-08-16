import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigation } from './AppStackNavigation';
import { StatusBar } from 'expo-status-bar';
import { useColorModeValue, useTheme } from 'native-base';
import { AuthStackNavigation } from './AuthStackNavigation';
import { Splash } from '../screens/splash/Splash';
import { useSplash } from '../hooks/context-hooks/useSplash';
import { useUser } from '../hooks/context-hooks/useUser';

export const AppNavigation = () => {
  const { colors } = useTheme();
  const { loading: isSplashLoading } = useSplash();
  const { user, loading } = useUser();

  if (isSplashLoading) {
    return <Splash />;
  }
  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        style="light"
        backgroundColor={useColorModeValue(
          colors.dark['900'],
          colors.trueGray['900'],
        )}
      />
      {user?.id ? <AppStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};
