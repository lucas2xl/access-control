import React, { ReactNode } from 'react';
import {
  Box,
  HStack,
  Icon,
  IPressableProps,
  PresenceTransition,
  Pressable,
  Text,
  useDisclose,
  useTheme,
  VStack,
} from 'native-base';
import { useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Actionsheet } from '../../../components/actionsheet/Actionsheet';
import { useSettings } from '../../../hooks/contex-hooks/useSettings';
import { ActionsheetItem } from '../../../components/actionsheet/ActionsheetItem';

interface SlideItemProps extends IPressableProps {
  label: string;
  quantity: number;
}
export const SlideDeviceItem = ({
  label,
  quantity,
  ...rest
}: SlideItemProps) => {
  const { settings } = useSettings();

  const { isOpen, onOpen, onClose } = useDisclose();
  const isList = settings?.viewType === 'list';

  async function handleOpenDevice() {}

  return (
    <Pressable
      _pressed={{
        opacity: '0.8',
      }}
      onPress={onOpen}
      {...rest}>
      {isList && (
        <Transaction visible={isList}>
          <ListCard label={label} onPress={handleOpenDevice} />
        </Transaction>
      )}

      {!isList && (
        <Transaction visible={!isList}>
          <GridCard
            label={label}
            quantity={quantity}
            onPress={handleOpenDevice}
          />
        </Transaction>
      )}

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetItem icon={Feather} iconName="settings" label="Settings" />
      </Actionsheet>
    </Pressable>
  );
};

interface CardProps {
  onPress: () => void;
  label: string;
  quantity?: number;
}
const ListCard = ({ label, onPress }: CardProps) => {
  const { sizes } = useTheme();
  const { width } = useWindowDimensions();
  return (
    <VStack w={width - sizes['8']} bg="trueGray.800" rounded="2xl" p="4" mb="2">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack space="2" alignItems="center">
          <Icon as={Feather} name="layers" size="sm" color="trueGray.200" />

          <Text color="text.50" fontSize="lg">
            {label}
          </Text>
        </HStack>

        <Pressable
          _pressed={{
            opacity: '0.2',
          }}
          onPress={onPress}>
          <Box
            p="3"
            rounded="full"
            bg={{
              linearGradient: {
                colors: ['trueGray.800', 'trueGray.900'],
                start: [0, 0],
                end: [1, 0],
              },
            }}>
            <Icon as={Feather} name="lock" color="emerald.500" />
          </Box>
        </Pressable>
      </HStack>
    </VStack>
  );
};

const GridCard = ({ label, quantity, onPress }: CardProps) => {
  const { width } = useWindowDimensions();
  return (
    <VStack
      w={width / 2 - 20}
      bg="trueGray.800"
      rounded="3xl"
      p="4"
      mb="2"
      minH="140px">
      <HStack alignItems="center" justifyContent="space-between">
        <Box>
          <Icon as={Feather} name="layers" size="sm" color="trueGray.200" />
        </Box>

        <Pressable
          _pressed={{
            opacity: '0.2',
          }}
          onPress={onPress}>
          <Box
            p="3"
            rounded="full"
            bg={{
              linearGradient: {
                colors: ['trueGray.800', 'trueGray.900'],
                start: [0, 0],
                end: [1, 0],
              },
            }}>
            <Icon as={Feather} name="lock" color="emerald.500" />
          </Box>
        </Pressable>
      </HStack>

      <Box flex="1" w="full" justifyContent="space-between" mt="4">
        <Text color="text.50" fontSize="lg">
          {label}
        </Text>

        {!!quantity && quantity > 0 && (
          <Text color="text.500" fontSize="lg">
            {`${quantity === 1 ? 'user' : 'users'} ${quantity}`}
          </Text>
        )}
      </Box>
    </VStack>
  );
};

interface TransactionProps {
  children: ReactNode;
  visible: boolean;
}
const Transaction = ({ children, visible }: TransactionProps) => {
  return (
    <PresenceTransition
      visible={visible}
      initial={{
        opacity: 0,
        translateX: 400,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 250,
        },
      }}>
      {children}
    </PresenceTransition>
  );
};
