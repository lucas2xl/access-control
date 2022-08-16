import React, { useEffect } from 'react';
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
import { useSplash } from '../../hooks/context-hooks/useSplash';

export const Splash = () => {
  const { setLoading } = useSplash();
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
    setLoading(false);
  };

  return (
    <Center
      bg="trueGray.900"
      flex="1"
      _light={{
        bg: 'trueGray.100',
      }}>
      <AnimatedBox position="absolute" alignSelf="center" style={brandStyles}>
        <Text
          color="trueGray.200"
          fontSize="48"
          _light={{
            color: 'trueGray.800',
          }}>
          H
        </Text>
      </AnimatedBox>

      <AnimatedBox position="absolute" alignSelf="center" style={logoStyles}>
        <Text
          color="trueGray.200"
          fontSize="48"
          _light={{
            color: 'trueGray.800',
          }}>
          HUSKY
        </Text>
      </AnimatedBox>
    </Center>
  );
};
