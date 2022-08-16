import React, { ReactNode } from 'react';
import { VStack } from 'native-base';

interface HeaderProps {
  children: ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  return (
    <VStack px="4" pb="4">
      {children}
    </VStack>
  );
};
