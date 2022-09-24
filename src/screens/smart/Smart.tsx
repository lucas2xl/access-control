import React from 'react';
import { Flex, Text } from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';

export const Smart = ({ route }: any) => {
  return (
    <AnimationStack>
      <Flex>
        <Text color="white">Smart</Text>
      </Flex>
    </AnimationStack>
  );
};
