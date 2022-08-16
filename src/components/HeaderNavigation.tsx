import React from 'react';
import { HStack, Icon, Pressable, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface HeaderButtonProps {
  onRightButtonPress: () => void;
  title?: string;
}

export const HeaderNavigation = ({
  onRightButtonPress,
  title,
}: HeaderButtonProps) => {
  const { goBack } = useNavigation();
  return (
    <HStack
      justifyContent="space-between"
      p="4"
      alignItems="center"
      bg="trueGray.900"
      _light={{
        bg: 'trueGray.100',
      }}>
      <Pressable p="1" onPress={goBack} _pressed={{ opacity: '0.2' }}>
        <Icon
          size="lg"
          as={Feather}
          name="chevron-left"
          color="trueGray.50"
          _light={{
            color: 'trueGray.900',
          }}
        />
      </Pressable>

      {title && (
        <Text
          color="trueGray.100"
          fontSize="xl"
          fontWeight="semibold"
          _light={{
            color: 'trueGray.900',
          }}>
          {title}
        </Text>
      )}

      <Pressable
        onPress={onRightButtonPress}
        p="1"
        _pressed={{ opacity: '0.2' }}>
        <Icon
          size="lg"
          as={Feather}
          name="settings"
          color="trueGray.50"
          _light={{
            color: 'trueGray.900',
          }}
        />
      </Pressable>
    </HStack>
  );
};
