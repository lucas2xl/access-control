import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabRoutes } from './types';
import { Home } from '../screens/home/Home';
import { Smart } from '../screens/smart/Smart';
import { Profile } from '../screens/profile/Profile';
import { BottomTab } from './BottomNavComponents/BottomTab';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const tabs = [{ name: 'HOME' }, { name: 'SMART' }, { name: 'PROFILE' }];

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTab {...{ tabs, ...props }} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HOME"
        options={{ unmountOnBlur: true }}
        component={Home}
      />
      <Tab.Screen
        name="SMART"
        component={Smart}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
};
