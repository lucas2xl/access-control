import { Text, VStack } from 'native-base';
import React from 'react';
import { Avatar } from '../../components/Avatar';

interface DrawerHeaderProps {
  username?: string;
  avatar?: string | null;
  city?: string;
}

export const DrawerHeader = ({ username, avatar, city }: DrawerHeaderProps) => {
  return (
    <VStack>
      <Avatar
        src={
          avatar ||
          'https://gravatar.com/avatar/511d14691a1d71a5636f9a54c497fdf9?s=400&d=mp&r=x'
        }
        size="lg"
      />
      <Text
        fontSize="2xl"
        _light={{
          color: 'text.900',
        }}
        color="text.50"
        bold>
        {username || ''}
      </Text>
      {!!city && (
        <Text fontSize="xl" color="text.500">
          {city}
        </Text>
      )}
    </VStack>
  );
};
