import { Center, HStack, Text, VStack } from 'native-base';
import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

type DrawerItemProps = {
  onPress: () => void;
  text?: string;
  icon?: ReactNode;
};

export const DrawerItem = ({ icon, text, onPress }: DrawerItemProps) => (
  <VStack w="full">
    <BorderlessButton onPress={onPress}>
      <HStack alignItems="center" mb="2">
        {icon && (
          <Center h="12" w="12" bgColor="trueGray.800" mr="2" rounded="xl">
            {icon}
          </Center>
        )}
        <Text color="text.200" textAlign="center" fontSize="18" mr="2">
          {text}
        </Text>
      </HStack>
    </BorderlessButton>
  </VStack>
);
