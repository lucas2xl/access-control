import React, { ReactNode } from 'react';
import { Flex } from 'native-base';

interface CardProps {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <Flex bg="trueGray.800" rounded="2xl">
      {children}
    </Flex>
  );
};
