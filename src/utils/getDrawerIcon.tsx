import React from 'react';
import { Icon, useTheme } from 'native-base';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

export type Tab = 'HOME_DRAWER' | 'SETTINGS' | 'DEVICES' | 'GROUPS' | 'LOGOUT';

export const DrawerIcon = (tab: Tab) => {
  const { colors } = useTheme();
  const ICON_COLOR = colors.trueGray['400'];
  switch (tab) {
    case 'HOME_DRAWER': {
      return <Icon as={Feather} name="home" color={ICON_COLOR} />;
    }
    case 'SETTINGS': {
      return <Icon as={Feather} name="settings" color={ICON_COLOR} />;
    }
    case 'DEVICES': {
      return <Icon as={MaterialIcons} name="devices" color={ICON_COLOR} />;
    }
    case 'GROUPS': {
      return (
        <Icon
          as={MaterialCommunityIcons}
          name="home-group"
          color={ICON_COLOR}
        />
      );
    }
    case 'LOGOUT': {
      return <Icon as={Feather} name="power" color={ICON_COLOR} />;
    }

    default:
      break;
  }
};
