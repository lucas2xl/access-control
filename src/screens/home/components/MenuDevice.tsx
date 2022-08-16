import React from 'react';
import {
  HStack,
  Icon,
  IIconProps,
  Menu,
  Pressable,
  Text,
  ThreeDotsIcon,
} from 'native-base';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSettings } from '../../../hooks/context-hooks/useSettings';

export const MenuDevice = () => {
  const { settings, updateSettings } = useSettings();

  function handleChangeGridView() {
    updateSettings({ viewType: 'grid' });
  }
  function handleChangeListView() {
    updateSettings({ viewType: 'list' });
  }

  return (
    <Menu
      px="4"
      bg="trueGray.700"
      rounded="2xl"
      mr="2"
      trigger={(triggerProps) => (
        <Pressable
          p="1"
          rounded="full"
          _pressed={{
            bg: 'trueGray.600',
          }}
          _light={{
            _pressed: {
              bg: 'trueGray.400',
            },
          }}
          {...triggerProps}>
          <ThreeDotsIcon size="sm" color="muted.400" />
        </Pressable>
      )}
      _light={{
        bg: 'trueGray.300',
      }}>
      {settings?.viewType === 'grid' ? (
        <MenuItem
          label="List View"
          iconLib={Feather}
          iconName="list"
          onPress={handleChangeListView}
        />
      ) : (
        <MenuItem
          label="Grid View"
          iconLib={Feather}
          iconName="grid"
          onPress={handleChangeGridView}
        />
      )}

      <MenuItem
        label="Device Management"
        iconLib={MaterialCommunityIcons}
        iconName="playlist-edit"
        onPress={() => {}}
      />
    </Menu>
  );
};

interface MenuItemProps {
  onPress: () => void;
  label: string;
  iconLib: IIconProps;
  iconName: string;
}
const MenuItem = ({ onPress, label, iconLib, iconName }: MenuItemProps) => {
  return (
    <Menu.Item
      borderBottomWidth="0.2"
      borderColor="trueGray.500"
      onPressOut={onPress}>
      <HStack space="2" alignItems="center">
        <Icon
          as={iconLib}
          name={iconName}
          color="trueGray.200"
          _light={{
            color: 'trueGray.800',
          }}
        />
        <Text
          color="trueGray.200"
          fontSize="lg"
          _light={{
            color: 'trueGray.800',
          }}>
          {label}
        </Text>
      </HStack>
    </Menu.Item>
  );
};
