import { Center, HStack, Pressable, Text, VStack } from 'native-base';
import React, { ReactNode } from 'react';

type DrawerItemProps = {
  onPress: () => void;
  text?: string;
  icon?: ReactNode;
};

export const DrawerItem = ({ icon, text, onPress }: DrawerItemProps) => (
  <VStack w="full">
    <Pressable
      _pressed={{
        bg: 'trueGray.700',
        _light: { bg: 'dark.700' },
      }}
      mb="2"
      rounded="xl"
      onPress={onPress}
      _light={{
        _pressed: {
          bg: 'trueGray.300',
        },
      }}>
      <HStack alignItems="center">
        {icon && (
          <Center
            h="12"
            w="12"
            bg="trueGray.800"
            mr="2"
            rounded="xl"
            _light={{
              bg: 'trueGray.200',
            }}>
            {icon}
          </Center>
        )}
        <Text
          color="trueGray.200"
          textAlign="center"
          fontSize="18"
          mr="2"
          _light={{
            color: 'trueGray.800',
          }}>
          {text}
        </Text>
      </HStack>
    </Pressable>
  </VStack>
);
