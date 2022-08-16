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

const AppStack = createStackNavigator<StackRoutes>();

export const AppStackNavigation = () => (
  <Box flex="1">
    <AppStack.Navigator
      {...StackNavigatorPresets.modalNavigator}
      initialRouteName="DRAWER">
      <AppStack.Screen name="DRAWER" component={DrawerNavigator} />
      <AppStack.Screen
        name="NOTIFICATIONS"
        component={Notifications}
        options={TransitionPresets.SlideFromRightIOS}
      />
    </AppStack.Navigator>
  </Box>
);
