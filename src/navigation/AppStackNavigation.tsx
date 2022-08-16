import React from 'react';
import { Box } from 'native-base';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { StackNavigatorPresets } from './Presets/StackNavigatorPresets';
import { StackRoutes } from './types';
import { DrawerNavigator } from './DrawerNavigator';
import { Notifications } from '../screens/notifications/Notifications';
import { Splash } from '../screens/splash/Splash';

const AppStack = createStackNavigator<StackRoutes>();

export const AppStackNavigation = () => (
  <Box flex="1">
    <AppStack.Navigator
      {...StackNavigatorPresets.modalNavigator}
      initialRouteName="SPLASH">
      <AppStack.Screen name="SPLASH" component={Splash} />
      <AppStack.Screen name="DRAWER" component={DrawerNavigator} />
      <AppStack.Screen
        name="NOTIFICATIONS"
        component={Notifications}
        options={TransitionPresets.SlideFromRightIOS}
      />
    </AppStack.Navigator>
  </Box>
);
