import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import { ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Flex, HStack, useColorMode, useTheme } from 'native-base';
import { AnimatedBox } from './AnimatedBox';

interface CustomStackComponentsProps {
  children: ReactNode;
}
export const AnimationStack = ({ children }: CustomStackComponentsProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { colors, radii } = useTheme();
  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const screenScale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const screenTranslate = interpolate(
      progress.value,
      [0, 1],
      [0, 0.8 * width * -0.1],
    );
    const borderWidth = interpolate(progress.value, [0, 1], [0, 2]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, radii['3xl']]);
    const elevation = interpolate(progress.value, [0, 1], [0, 9]);
    const shadowRadius = interpolate(progress.value, [0, 1], [0, 5.46]);
    const shadowOpacity = interpolate(progress.value, [0, 1], [0, 0.32]);

    return {
      transform: [{ scale: screenScale }, { translateX: screenTranslate }],
      borderWidth,
      borderRadius,
      borderColor: isDark ? colors.muted['500'] : colors.muted['200'],
      shadowColor: isDark ? colors.white : colors.black,
      shadowOpacity,
      shadowRadius,
      elevation,
    };
  });
  return (
    <HStack
      flex="1"
      bg="trueGray.900"
      _light={{
        bg: 'trueGray.100',
      }}>
      <AnimatedBox
        flex="1"
        bg="trueGray.900"
        style={[animatedStyle]}
        overflow="hidden"
        _light={{
          bg: 'trueGray.100',
        }}>
        <Flex safeArea>{children}</Flex>
      </AnimatedBox>
    </HStack>
  );
};
