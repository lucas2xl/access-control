import React from 'react';
import { Flex, Text } from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';

export const Settings = ({ route }: any) => {
  return (
    <AnimationStack>
      <Flex>
        <Text color="white">Settings</Text>
      </Flex>
    </AnimationStack>
  );
};
