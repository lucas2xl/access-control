import React from 'react';
import {
  Actionsheet,
  IActionsheetItemProps,
  Icon,
  IIconProps,
} from 'native-base';

interface ModalItemProps extends IActionsheetItemProps {
  label: string;
  icon?: IIconProps;
  iconName?: string;
}
export const ActionsheetItem = ({
  label,
  icon,
  iconName,
  ...rest
}: ModalItemProps) => {
  return (
    <Actionsheet.Item
      bg="trueGray.800"
      textAlign="center"
      _pressed={{
        bg: 'trueGray.700',
      }}
      _stack={{
        alignItems: 'center',
      }}
      _text={{
        color: 'trueGray.200',
        fontSize: 'lg',
      }}
      _icon={{
        color: 'trueGray.200',
      }}
      leftIcon={icon ? <Icon as={icon} name={iconName} /> : undefined}
      _light={{
        bg: 'trueGray.200',
        _text: {
          color: 'trueGray.800',
        },
        _icon: {
          color: 'trueGray.800',
        },
        _pressed: {
          bg: 'trueGray.300',
        },
      }}
      {...rest}>
      {label}
    </Actionsheet.Item>
  );
};
