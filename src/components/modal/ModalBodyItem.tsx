import React, { useState } from 'react';
import { Icon, IInputProps, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface ModalBodyItemProps extends IInputProps {
  type: 'text' | 'password';
  placeholder: string;
}

export const ModalBodyItem = ({
  type,
  placeholder,
  ...rest
}: ModalBodyItemProps) => {
  const [visibility, setVisibility] = useState(type === 'text' ? true : false);

  function handleChangeVisibility() {
    setVisibility((prevState) => !prevState);
  }

  return (
    <Input
      borderColor="trueGray.600"
      fontSize="md"
      type={type === 'text' ? 'text' : 'password'}
      color="trueGray.300"
      _focus={{
        bg: 'trueGray.900',
        borderColor: 'trueGray.700',
      }}
      selectionColor="green.800"
      InputRightElement={
        type === 'password' ? (
          <Icon
            as={
              <MaterialIcons
                name={visibility ? 'visibility' : 'visibility-off'}
              />
            }
            size="md"
            mr="2"
            color="trueGray.600"
            onPress={handleChangeVisibility}
            _light={{
              color: 'trueGray.400',
            }}
          />
        ) : undefined
      }
      placeholder={placeholder}
      _light={{
        borderColor: 'trueGray.400',
        color: 'trueGray.700',
        _focus: {
          bg: 'trueGray.100',
          borderColor: 'trueGray.300',
        },
      }}
      {...rest}
    />
  );
};
