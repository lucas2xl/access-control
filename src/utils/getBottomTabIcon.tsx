import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'native-base';

const ICON_SIZE = 25;

export const getBottomTabIcon = (
  tab: string,
  routeName: string,
  fillActive: string,
  fillInactive: string,
) => {
  switch (tab) {
    case 'HOME': {
      return (
        <Icon
          as={AntDesign}
          name="home"
          size={ICON_SIZE}
          color={routeName === 'HOME' ? fillActive : fillInactive}
        />
      );
    }
    case 'SMART': {
      return (
        <Icon
          as={AntDesign}
          name="API"
          size={ICON_SIZE}
          color={routeName === 'SMART' ? fillActive : fillInactive}
        />
      );
    }
    case 'PROFILE': {
      return (
        <Icon
          as={AntDesign}
          name="user"
          size={ICON_SIZE}
          color={routeName === 'PROFILE' ? fillActive : fillInactive}
        />
      );
    }

    default:
      break;
  }
};
