import React from 'react';
import { Flex, Text } from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';

export const Devices = ({ route }: any) => {
  return (
    <AnimationStack>
      <Flex>
        <Text color="white">Devices</Text>
      </Flex>
    </AnimationStack>
  );
};
