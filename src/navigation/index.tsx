import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigation } from './AppStackNavigation';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'native-base';
import { useUser } from '../hooks/contex-hooks/useUser';
import { AuthStackNavigation } from './AuthStackNavigation';

export const AppNavigation = () => {
  const { colors } = useTheme();
  const { user } = useUser();
  console.log(user);
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        style="light"
        backgroundColor={colors.trueGray['900']}
      />
      {user?.id ? <AppStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};
