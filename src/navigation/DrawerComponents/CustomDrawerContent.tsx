import React from 'react';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import { AnimatedBox } from '../../components/AnimatedBox';
import { DrawerHeader } from './DrawerHeader';
import { Box, Divider, VStack } from 'native-base';
import { DrawerItem } from './DrawerItem';
import { DrawerIcon, Tab } from '../../utils/getDrawerIcon';
import { useUser } from '../../hooks/context-hooks/useUser';

export const CustomDrawerContent = ({
  ...props
}: DrawerContentComponentProps) => {
  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;
  const { width } = useWindowDimensions();
  const { handleSignOut, user } = useUser();

  const style = useAnimatedStyle(() => {
    const drawerScale = interpolate(progress.value, [0, 1], [1.1, 1]);
    const drawerTranslate = interpolate(
      progress.value,
      [0, 1],
      [0.1 * width, 1],
    );
    const drawerOpacity = interpolate(progress.value, [0, 1], [0, 2]);

    return {
      transform: [{ scale: drawerScale }, { translateX: drawerTranslate }],
      opacity: drawerOpacity,
    };
  });

  function handleNavigate(routeName: string) {
    props.navigation.navigate(routeName);
  }

  return (
    <VStack
      safeArea
      flex="1"
      bg="trueGray.900"
      p="4"
      _light={{
        bg: 'trueGray.100',
      }}>
      <AnimatedBox flex="1" style={style}>
        <DrawerHeader
          username={user?.username}
          city={user?.city}
          avatar={user?.photo}
        />
        <Divider
          bg="trueGray.600"
          mt="2"
          _light={{
            bg: 'trueGray.400',
          }}
        />
        <Box flex="1" mt="10" alignItems="flex-start">
          {props.state.routes.map(({ name, key }) => (
            <DrawerItem
              key={name}
              text={props.descriptors[key].options.title}
              icon={DrawerIcon(name as Tab)}
              onPress={() => handleNavigate(name)}
            />
          ))}
        </Box>

        <Divider
          bg="trueGray.600"
          mb="2"
          _light={{
            bg: 'trueGray.400',
          }}
        />
        <DrawerItem
          key={'LOGOUT'}
          text={'Logout'}
          icon={DrawerIcon('LOGOUT' as Tab)}
          onPress={handleSignOut}
        />
      </AnimatedBox>
    </VStack>
  );
};
