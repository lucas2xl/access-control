import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, Icon } from 'native-base';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';

interface HeaderButtonProps extends BorderlessButtonProps {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  color?: string;
  hasNotification?: boolean;
}

export const HeaderButton = ({
  icon,
  color,
  hasNotification,
  ...rest
}: HeaderButtonProps) => {
  return (
    <BorderlessButton {...rest}>
      <Center bgColor="trueGray.800" rounded="xl" p="4">
        <Icon as={Ionicons} name={icon} color={color ?? 'trueGray.50'} />
        {hasNotification && (
          <Box
            position="absolute"
            bg="red.500"
            w="2"
            h="2"
            rounded="full"
            right="4"
            top="4/5"
          />
        )}
      </Center>
    </BorderlessButton>
  );
};
