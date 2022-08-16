import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, Icon, IPressableProps, Pressable } from 'native-base';

interface HeaderButtonProps extends IPressableProps {
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
    <Pressable
      p="4"
      rounded="xl"
      bg="trueGray.800"
      _light={{
        bg: 'trueGray.200',
      }}
      {...rest}>
      <Center>
        <Icon
          as={Ionicons}
          name={icon}
          color={color ?? 'trueGray.50'}
          _light={{
            color: color ?? 'trueGray.900',
          }}
        />
        {hasNotification && (
          <Box
            position="absolute"
            bg="red.500"
            w="2"
            h="2"
            rounded="full"
            right="-0.5"
            top="-1"
          />
        )}
      </Center>
    </Pressable>
  );
};
