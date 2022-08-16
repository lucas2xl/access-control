import React, { useEffect } from 'react';
import { NavigationState, useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { AppNavigationType } from '../types';
import { Pressable, Text, useTheme } from 'native-base';
import { getBottomTabIcon } from '../../utils/getBottomTabIcon';
import { useWindowDimensions } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedBox } from '../../components/AnimatedBox';
import { isAndroid, isIos } from '../../utils/platform';
import { useDrawerProgress } from '@react-navigation/drawer';

type BottomTabProps = {
  tabs: {
    name: string;
  }[];
  state: NavigationState;
};

enum Tabs {
  'HOME',
  'SMART',
  'PROFILE',
}

export const BottomTab = ({ tabs, state }: BottomTabProps) => {
  const activeTabIndex = state.index;
  const { colors, sizes } = useTheme();
  const navigation = useNavigation<AppNavigationType<'DRAWER'>>();
  const { width, height } = useWindowDimensions();
  const tabWidth = (width - 95) / (tabs.length - 1);
  const startingPos = (tabWidth - 5) / 2;

  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(
      startingPos + 95 + (activeTabIndex - 1) * tabWidth,
      {
        duration: 600,
      },
    );
  }, [activeTabIndex]);

  const borderStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const animatedStyle = useAnimatedStyle(() => {
    const screenBottom = interpolate(
      progress.value,
      [0, 1],
      [isIos ? -40 : 0, isAndroid ? height * 0.108 : height * 0.101],
    );
    const screenLeft = interpolate(progress.value, [0, 1], [0, width * 0.04]);
    const screenHeight = interpolate(
      progress.value,
      [0, 1],
      [isIos ? sizes['32'] : sizes['16'], sizes['16']],
    );

    return {
      bottom: screenBottom,
      left: screenLeft,
      height: screenHeight,
    };
  });

  function handleNavigateToBottomScreen(route: Tabs) {
    navigation.navigate(route);
  }

  return (
    <AnimatedBox
      position="absolute"
      flex="1"
      w="full"
      rounded="2xl"
      overflow="hidden"
      borderWidth="1"
      borderColor="trueGray.800"
      style={[animatedStyle]}>
      <BlurView
        intensity={80}
        tint="dark"
        style={{ flexDirection: 'row', flex: 1 }}>
        {tabs.map((tab, key: number) => {
          return (
            <AnimatedBox
              key={key}
              flex="1"
              alignItems="center"
              borderColor="white">
              <Pressable
                alignItems="center"
                flex="1"
                w="100%"
                h="100%"
                pt="4"
                onPress={() => handleNavigateToBottomScreen(tab.name)}>
                {getBottomTabIcon(
                  tab.name,
                  tabs[activeTabIndex].name,
                  colors.emerald['600'],
                  colors.white,
                )}
                <Text
                  color={key === activeTabIndex ? 'emerald.600' : 'white'}
                  mt="1"
                  fontSize="8">
                  {tab.name}
                </Text>
              </Pressable>
            </AnimatedBox>
          );
        })}
      </BlurView>
      <AnimatedBox
        position="absolute"
        top="0"
        bg="white"
        h="0.5"
        w="20"
        style={[borderStyle]}
      />
    </AnimatedBox>
  );
};
