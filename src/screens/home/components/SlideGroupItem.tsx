import React from 'react';
import {
  Box,
  Center,
  IPressableProps,
  PresenceTransition,
  Pressable,
  Text,
} from 'native-base';

interface SlideItemProps extends IPressableProps {
  label: string;
  isSelected?: boolean;
}
export const SlideGroupItem = ({
  label,
  isSelected = false,
  ...rest
}: SlideItemProps) => {
  return (
    <Pressable alignItems="center" {...rest}>
      <Center
        px="4"
        py="2"
        bg={isSelected ? 'trueGray.800' : 'transparent'}
        borderWidth="1"
        borderColor={isSelected ? 'transparent' : 'muted.600'}
        rounded="3xl"
        _light={{
          bg: isSelected ? 'trueGray.200' : 'transparent',
        }}>
        <Text
          color="trueGray.100"
          fontSize="lg"
          _light={{
            color: 'trueGray.900',
          }}>
          {label}
        </Text>
      </Center>
      <PresenceTransition
        visible={isSelected}
        initial={{
          opacity: 0,
          translateX: -40,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 100,
            mass: 1,
            tension: 100,
          },
        }}>
        <Box h="1" w="4" rounded="3xl" bg="green.600" mt="2" />
      </PresenceTransition>
    </Pressable>
  );
};
