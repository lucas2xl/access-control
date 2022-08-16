import { Pressable, Text } from 'native-base';
import React from 'react';

interface ModalFooterItemProps {
  onPress: () => void;
  type: 'save' | 'cancel';
}
export const ModalFooterItem = ({ onPress, type }: ModalFooterItemProps) => {
  return (
    <Pressable
      flex="1"
      alignItems="center"
      borderRightWidth={type === 'cancel' ? '0.2' : '0'}
      borderLeftWidth={type === 'save' ? '0.2' : '0'}
      borderColor="trueGray.700"
      p="1"
      _pressed={{
        bg: 'trueGray.700',
        rounded: 'sm',
      }}
      onPress={onPress}
      _light={{
        borderColor: 'trueGray.300',
        _pressed: {
          bg: 'trueGray.300',
        },
      }}>
      <Text
        fontSize="md"
        color={type === 'save' ? 'trueGray.200' : 'trueGray.500'}
        _light={{
          color: type === 'save' ? 'trueGray.800' : 'trueGray.500',
        }}>
        {type === 'save' ? 'Save' : 'Cancel'}
      </Text>
    </Pressable>
  );
};
