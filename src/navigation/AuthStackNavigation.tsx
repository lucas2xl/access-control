import React from 'react';
import { Box } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigatorPresets } from './Presets/StackNavigatorPresets';
import { StackRoutes } from './types';
import { SignIn } from '../screens/signIn/SignIn';

const AuthStack = createStackNavigator<StackRoutes>();

export const AuthStackNavigation = () => (
  <Box flex="1">
    <AuthStack.Navigator
      {...StackNavigatorPresets.modalNavigator}
      initialRouteName="SIGN_IN">
      <AuthStack.Screen name="SIGN_IN" component={SignIn} />
    </AuthStack.Navigator>
  </Box>
);
