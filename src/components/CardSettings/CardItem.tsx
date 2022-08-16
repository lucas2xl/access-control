import React from 'react';
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IIconProps,
  IPressableProps,
  Pressable,
  Switch,
  Text,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

interface CardItemProps extends IPressableProps {
  label: string;
  iconName: string;
  icon: IIconProps;
  type: 'arrow' | 'arrow-label' | 'switch' | 'avatar' | 'email';
  switchValue?: boolean;
  onChangeSwitch?: () => void;
  arrowLabel?: string;
  emailLabel?: string;
  image?: string;
}
export const CardItem = ({
  label,
  iconName,
  icon,
  type,
  switchValue,
  onChangeSwitch,
  arrowLabel,
  emailLabel,
  image,
  ...rest
}: CardItemProps) => {
  return (
    <Pressable
      _pressed={{
        bg: 'trueGray.700',
        rounded: 'xl',
      }}
      _light={{
        _pressed: {
          bg: 'trueGray.300',
        },
      }}
      {...rest}>
      <HStack alignItems="center" justifyContent="space-between" p="4">
        <Box>
          <HStack space="2" alignItems="center">
            <Icon
              as={icon}
              name={iconName}
              size="sm"
              color="trueGray.200"
              _light={{
                color: 'trueGray.800',
              }}
            />
            <Text
              fontSize="lg"
              color="trueGray.200"
              _light={{
                color: 'trueGray.800',
              }}>
              {label}
            </Text>
          </HStack>
          {type === 'email' && (
            <Text fontSize="md" color="trueGray.500">
              {emailLabel}
            </Text>
          )}
        </Box>

        {type === 'switch' && (
          <Switch
            value={switchValue}
            onValueChange={onChangeSwitch}
            offThumbColor="trueGray.500"
            offTrackColor="trueGray.700"
            onTrackColor="trueGray.700"
            onThumbColor="trueGray.900"
            size="sm"
          />
        )}
        {type === 'arrow' && (
          <Icon as={Feather} name="chevron-right" size="lg" />
        )}

        {type === 'email' && (
          <Icon as={Feather} name="chevron-right" size="lg" />
        )}

        {type === 'arrow-label' && (
          <HStack space="2" alignItems="center">
            <Text fontSize="md" color="trueGray.500">
              {arrowLabel}
            </Text>
            <Icon as={Feather} name="chevron-right" size="lg" />
          </HStack>
        )}

        {type === 'avatar' && (
          <HStack alignItems="center">
            <Avatar size="sm" source={{ uri: image }} />
            <Icon as={Feather} name="chevron-right" size="lg" />
          </HStack>
        )}
      </HStack>
    </Pressable>
  );
};
