import React from 'react';
import { Avatar as AvatarComponent, IAvatarProps } from 'native-base';

interface AvatarProps extends IAvatarProps {
  src: string;
}
export const Avatar = ({ src, ...rest }: AvatarProps) => {
  return (
    <AvatarComponent
      mb="2"
      borderWidth="2"
      borderColor="emerald.500"
      bgColor="white"
      source={{ uri: src }}
      {...rest}
    />
  );
};
