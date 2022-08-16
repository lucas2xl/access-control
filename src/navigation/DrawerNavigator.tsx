import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { DrawerRoutes } from './types';
import { Settings } from '../screens/settings/Settings';
import { Devices } from '../screens/devices/Devices';
import { CustomDrawerContent } from './DrawerComponents/CustomDrawerContent';
import { Groups } from '../screens/groups/Groups';
import { BottomTabNavigator } from './BottomTabNavigator';

const Drawer = createDrawerNavigator<DrawerRoutes>();

const defaultScreenOptions: DrawerNavigationOptions = {
  overlayColor: 'transparent',
  drawerType: 'back',
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HOME_DRAWER"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HOME_DRAWER"
        options={{
          title: 'Home',
          ...defaultScreenOptions,
          swipeEnabled: true,
        }}>
        {() => <BottomTabNavigator />}
      </Drawer.Screen>
      <Drawer.Screen
        name="DEVICES"
        component={Devices}
        options={{
          title: 'Devices',
          swipeEnabled: true,
          ...defaultScreenOptions,
        }}
      />
      <Drawer.Screen
        name="GROUPS"
        component={Groups}
        options={{
          title: 'Groups',
          swipeEnabled: true,
          ...defaultScreenOptions,
        }}
      />
      <Drawer.Screen
        name="SETTINGS"
        component={Settings}
        options={{
          title: 'Settings',
          swipeEnabled: true,
          ...defaultScreenOptions,
        }}
      />
    </Drawer.Navigator>
  );
};
