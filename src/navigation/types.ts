import { StackNavigationProp } from '@react-navigation/stack';

export type DrawerRoutes = {
  SETTINGS: undefined;
  DEVICES: undefined;
  GROUPS: undefined;
  HOME_DRAWER: undefined;
};

export type StackRoutes = {
  SPLASH: undefined;
  DRAWER: undefined;
  NOTIFICATIONS: undefined;
  LOGIN: undefined;
};

export type BottomTabRoutes = {
  HOME: undefined;
  SMART: undefined;
  PROFILE: undefined;
};

export type AppRoutes = ModalRoutes;
export type ModalRoutes = {
  DRAWER: undefined;
  NOTIFICATIONS: undefined;
  CREATE_POST_NAVIGATION: undefined;
};

export type AppNavigationType<RouteName extends keyof AppRoutes> =
  StackNavigationProp<AppRoutes, RouteName>;
