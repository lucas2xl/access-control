import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Center, Text } from 'native-base';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { AnimatedBox } from '../../components/AnimatedBox';
import { useUser } from '../../hooks/contex-hooks/useUser';

export const Splash = () => {
  const { user } = useUser();
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 0.5, 1], [1, 0.3, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 1],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const logoStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 1], [0, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 1],
            [-50, 1],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  useEffect(() => {
    splashAnimation.value = withTiming(
      1,
      {
        duration: 1000,
      },
      () => {
        'worklet';
        runOnJS(startApp)();
      },
    );
  }, []);

  const startApp = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: user?.id ? 'DRAWER' : 'LOGIN' }],
      }),
    );
  };

  return (
    <Center bg="trueGray.900" flex="1">
      <AnimatedBox position="absolute" alignSelf="center" style={brandStyles}>
        <Text color="trueGray.200" fontSize="48">
          H
        </Text>
      </AnimatedBox>

      <AnimatedBox position="absolute" alignSelf="center" style={logoStyles}>
        <Text color="trueGray.200" fontSize="48">
          HUSKY
        </Text>
      </AnimatedBox>
    </Center>
  );
};
