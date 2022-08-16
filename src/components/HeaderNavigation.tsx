import React from 'react';
import { HStack, Icon, Text } from 'native-base';
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
      bg="trueGray.900">
      <BorderlessButton
        activeOpacity={0.2}
        style={{
          padding: 2,
        }}
        onPress={goBack}>
        <Icon size="lg" as={Feather} name="chevron-left" color="trueGray.50" />
      </BorderlessButton>

      {title && (
        <Text color="trueGray.100" fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
      )}

      <BorderlessButton
        activeOpacity={0.2}
        style={{
          padding: 2,
        }}
        onPress={onRightButtonPress}>
        <Icon size="lg" as={Feather} name="settings" color="trueGray.50" />
      </BorderlessButton>
    </HStack>
  );
};
