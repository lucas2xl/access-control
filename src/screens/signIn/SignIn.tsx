import React, { useRef, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  FormControl,
  Pressable,
  WarningOutlineIcon,
  HStack,
  Spinner,
  useToast,
} from 'native-base';
import { TextInput } from 'react-native';
import { Input } from './components/Input';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useUser } from '../../hooks/contex-hooks/useUser';

export interface IFormDevice extends FieldValues {
  phone: string;
  password: string;
}

const schema = Yup.object().shape({
  password: Yup.string()
    .required('Password field is required')
    .min(6, 'Must be atleast 6 characters.'),
  phone: Yup.string().required('Phone or Email field is required'),
});

export const SignIn = () => {
  const { handleSignIn } = useUser();
  const { show } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormDevice>({
    resolver: yupResolver(schema),
  });
  const passwordRef = useRef<TextInput>(null);

  async function handleUserSignIn(form: IFormDevice) {
    setLoading(true);
    try {
      await handleSignIn(form);
      show({
        title: 'Sucesso!',
        placement: 'top',
      });
      reset();
    } catch (error) {
      show({
        title: 'Erro!',
        placement: 'top',
        bg: 'error.700',
      });
    } finally {
      // setLoading(false);
    }
  }

  function handleEnterAsGuest() {
    console.log('guest');
  }

  console.log(errors);
  return (
    <VStack
      safeArea
      flex="1"
      bg="trueGray.900"
      px="8"
      justifyContent="space-between">
      <Box>
        <Box py="8">
          <Heading
            color="trueGray.100"
            fontSize="4xl">{`Let's sign you in`}</Heading>
          <Text
            color="trueGray.200"
            fontSize="4xl">{`Welcome back.\nYou've been missed!`}</Text>
        </Box>

        <FormControl mt="4">
          <Input
            control={control}
            name="phone"
            placeholder="Phone or email"
            type="text"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            isInvalid={!!errors.phone?.message}
          />
          <Input
            control={control}
            name="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            isSecure
            isInvalid={!!errors.password?.message}
          />

          {!!errors?.password?.message && (
            <HStack space="2" alignItems="center">
              <WarningOutlineIcon size="xs" color="error.700" />
              <Text color="error.700">{errors?.password?.message}</Text>
            </HStack>
          )}
          {!!errors?.phone?.message && (
            <HStack space="2" alignItems="center">
              <WarningOutlineIcon size="xs" color="error.700" />
              <Text color="error.700">{errors?.phone?.message}</Text>
            </HStack>
          )}
        </FormControl>
      </Box>

      <Box>
        <Text textAlign="center" color="trueGray.400" mb="4" fontSize="md">
          {`Don't have an account? `}
          <Text
            color="trueGray.200"
            fontWeight="semibold"
            onPress={handleEnterAsGuest}>
            enter as a guest
          </Text>
        </Text>

        <Pressable
          bg="trueGray.100"
          p="4"
          rounded="2xl"
          _pressed={{
            bg: 'trueGray.300',
          }}
          minH="55px"
          alignItems="center"
          justifyContent="center"
          onPress={handleSubmit(handleUserSignIn)}>
          {loading ? (
            <Spinner color="green.800" />
          ) : (
            <Text textAlign="center" fontSize="lg" fontWeight="semibold">
              Sign in
            </Text>
          )}
        </Pressable>
      </Box>
    </VStack>
  );
};
