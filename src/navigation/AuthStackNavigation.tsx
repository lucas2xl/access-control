import React from 'react';
import { Box } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigatorPresets } from './Presets/StackNavigatorPresets';
import { StackRoutes } from './types';
import { Splash } from '../screens/splash/Splash';
import { SignIn } from '../screens/signIn/SignIn';

const AuthStack = createStackNavigator<StackRoutes>();

export const AuthStackNavigation = () => (
  <Box flex="1">
    <AuthStack.Navigator
      {...StackNavigatorPresets.modalNavigator}
      initialRouteName="SPLASH">
      <AuthStack.Screen name="SPLASH" component={Splash} />
      <AuthStack.Screen name="LOGIN" component={SignIn} />
    </AuthStack.Navigator>
  </Box>
);
