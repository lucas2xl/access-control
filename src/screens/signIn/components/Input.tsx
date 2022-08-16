import React, { forwardRef, useState } from 'react';
import { Icon, IInputProps, Input as I, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Control, Controller } from 'react-hook-form';
import { IFormDevice } from '../SignIn';

interface SignInInputProps extends IInputProps {
  isSecure?: boolean;
  control: Control<IFormDevice>;
  name: string;
}

export const Input = forwardRef(
  ({ isSecure = false, control, name, ...rest }: SignInInputProps, ref) => {
    const [showPassword, setShowPassword] = useState(isSecure);

    function handleChangeShowPassword() {
      setShowPassword((prevState) => !prevState);
    }
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <I
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            ref={ref as any}
            p="5"
            rounded="2xl"
            borderColor="trueGray.600"
            mb="2"
            color="trueGray.200"
            fontSize="lg"
            _focus={{
              bg: 'trueGray.700',
              borderColor: 'trueGray.200',
            }}
            secureTextEntry={showPassword}
            rightElement={
              isSecure ? (
                <Pressable p="2" mr="2" onPress={handleChangeShowPassword}>
                  <Icon
                    as={Feather}
                    name={showPassword ? 'eye' : 'eye-off'}
                    size="lg"
                  />
                </Pressable>
              ) : undefined
            }
            _light={{
              color: 'trueGray.800',
              borderColor: 'trueGray.400',
              _focus: {
                bg: 'trueGray.300',
                borderColor: 'trueGray.800',
              },
            }}
            {...rest}
          />
        )}
      />
    );
  },
);
