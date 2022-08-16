import React, { useState } from 'react';
import {
  Text,
  Center,
  Flex,
  HStack,
  Icon,
  ScrollView,
  VStack,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

import { HeaderNavigation } from '../../components/HeaderNavigation';
import { NotificationCard } from './components/NotificationCard';

export const Notifications = ({ route }: any) => {
  const [notifications, setNotifications] = useState<any[]>(['1']);
  function handleOpenSettings() {}

  return (
    <Flex
      safeAreaTop
      flex="1"
      bg="trueGray.900"
      _light={{
        bg: 'trueGray.100',
      }}>
      <HeaderNavigation
        title="Notifcation"
        onRightButtonPress={handleOpenSettings}
      />
      <HStack
        flex="1"
        bg="trueGray.800"
        _light={{
          bg: 'trueGray.200',
        }}>
        {!notifications.length ? (
          <Center w="full">
            <Icon as={Feather} name="bell-off" size="6xl" />

            <Text color="trueGray.500" mt="2" fontWeight="semibold">
              No messages
            </Text>
          </Center>
        ) : (
          <ScrollView mt="4" mx="4">
            <VStack space="2">
              <Text
                fontSize="xl"
                color="trueGray.100"
                fontWeight="semibold"
                _light={{
                  color: 'trueGray.900',
                }}>
                {`${'29'} `}
                <Text
                  fontSize="sm"
                  color="trueGray.400"
                  fontWeight="light"
                  _light={{
                    color: 'trueGray.600',
                  }}>
                  July
                </Text>
              </Text>
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />

              <Text
                fontSize="xl"
                color="trueGray.100"
                fontWeight="semibold"
                _light={{
                  color: 'trueGray.900',
                }}>
                {`${'27'} `}
                <Text
                  fontSize="sm"
                  color="trueGray.400"
                  fontWeight="light"
                  _light={{
                    color: 'trueGray.600',
                  }}>
                  July
                </Text>
              </Text>
              <NotificationCard />
              <NotificationCard />
            </VStack>
          </ScrollView>
        )}
      </HStack>
    </Flex>
  );
};
