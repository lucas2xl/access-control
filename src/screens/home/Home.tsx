import React, { useState } from 'react';
import {
  AddIcon,
  Button,
  Flex,
  HStack,
  Text,
  useTheme,
  ScrollView,
} from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';
import { HeaderButton } from '../../components/HeaderButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { AnimatedBox } from '../../components/AnimatedBox';
import { SlideGroupItem } from './components/SlideGroupItem';
import { SlideDeviceItem } from './components/SlideDeviceItem';
import { AnimatedScroll } from '../../components/AnimatedScroll';
import { MenuDevice } from './components/MenuDevice';
import { Header } from '../../components/Header';

const data = [
  {
    id: '1',
    label: 'Room',
    data: [],
  },
  {
    id: '2',
    label: 'Room2',
    data: [],
  },
  {
    id: '3',
    label: 'Room3',
    data: [],
  },
  {
    id: '4',
    label: 'Room4',
    data: [],
  },
  {
    id: '5',
    label: 'Room5',
    data: [],
  },
];

export const Home = ({ route }: any) => {
  const { sizes, colors } = useTheme();
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const [selectedGroupId, setSelectedGroupId] = useState('all');

  const style = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 50],
      [60, 0],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 20],
      [1, 0],
      Extrapolate.CLAMP,
    );
    const marginTop = interpolate(
      scrollY.value,
      [0, 20],
      [sizes['4'], 0],
      Extrapolate.CLAMP,
    );

    return {
      height,
      opacity,
      marginTop,
    };
  });

  const transaction = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 45, 50],
      [0, 0, 1],
      Extrapolate.CLAMP,
    );
    const translateX = interpolate(
      scrollY.value,
      [0, 50],
      [100, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ translateX }],
      opacity,
    };
  });
  const userInfoStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 50],
      [60, 0],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 50],
      [1, 0],
      Extrapolate.CLAMP,
    );

    return {
      height,
      opacity,
    };
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  function handleNavigateToProfile() {
    navigation.navigate('PROFILE');
  }

  function handleNavigateToNotification() {
    navigation.navigate('NOTIFICATIONS');
  }

  function handleAddDevice() {}

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleNavigateToDeviceSettings() {}

  function handleSelectedGroupId(id: string | number) {
    setSelectedGroupId(String(id));
  }

  return (
    <AnimationStack>
      <Header>
        <HStack justifyContent="space-between">
          <HeaderButton icon="ios-menu-sharp" onPress={handleOpenDrawer} />

          <HStack space="2">
            <AnimatedBox style={transaction}>
              <HeaderButton icon="add" color={colors.emerald[500]} />
            </AnimatedBox>

            <HeaderButton
              icon="ios-notifications-outline"
              hasNotification
              onPress={handleNavigateToNotification}
            />
          </HStack>
        </HStack>
      </Header>

      <Flex>
        <AnimatedBox style={userInfoStyle} w="full" px="4">
          <Text
            fontSize="3xl"
            bold
            color="text.300"
            _light={{
              color: 'text.600',
            }}>
            Welcome, Lucas
          </Text>

          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" fontWeight="400" color="text.500">
              Empresa xx
            </Text>

            <Button
              _pressed={{
                opacity: '0.5',
              }}
              onPress={handleAddDevice}
              p="0"
              variant="unstyled"
              _text={{
                fontSize: 'sm',
                color: 'trueGray.100',
              }}
              _icon={{
                color: 'emerald.500',
                size: 'md',
              }}
              _light={{
                _text: {
                  color: 'trueGray.900',
                },
              }}
              leftIcon={<AddIcon />}>
              add device
            </Button>
          </HStack>
        </AnimatedBox>

        <AnimatedBox style={[style]} flexDirection="row" pl="4">
          <SlideGroupItem
            label="All"
            isSelected={selectedGroupId === 'all'}
            onPress={() => handleSelectedGroupId('all')}
          />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
              <SlideGroupItem
                key={item.id}
                label={item.label}
                isSelected={selectedGroupId === item.id}
                onPress={() => handleSelectedGroupId(item.id)}
              />
            ))}
          </ScrollView>
        </AnimatedBox>

        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mb="4"
          px="4"
          pt="2">
          <Text
            color="text.300"
            fontSize="lg"
            fontWeight="medium"
            _light={{
              color: 'text.600',
            }}>
            Devices
          </Text>
          <MenuDevice />
        </HStack>

        <AnimatedScroll
          px="4"
          _contentContainerStyle={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: '80',
          }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}>
          {new Array(20).fill(null).map((device, index) => (
            <SlideDeviceItem
              key={index * 12}
              label={`Casa ${index + 1}`}
              quantity={index}
            />
          ))}
        </AnimatedScroll>
      </Flex>
    </AnimationStack>
  );
};
