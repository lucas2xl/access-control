import React, { ReactNode } from 'react';
import { Actionsheet as Ac, IActionsheetProps } from 'native-base';
import { ActionsheetItem } from './ActionsheetItem';

interface ModalProps extends IActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isCanceled?: boolean;
}
export const Actionsheet = ({
  isOpen,
  onClose,
  children,
  isCanceled,
  ...rest
}: ModalProps) => {
  return (
    <Ac isOpen={isOpen} onClose={onClose} {...rest}>
      <Ac.Content
        bg="trueGray.800"
        p="0"
        _light={{
          bg: 'trueGray.200',
        }}>
        {children}
        {isCanceled && (
          <ActionsheetItem
            label="Cancel"
            onPress={onClose}
            alignItems="center"
            borderTopWidth="1"
            borderColor="trueGray.700"
            _light={{
              borderColor: 'trueGray.300',
            }}
          />
        )}
      </Ac.Content>
    </Ac>
  );
};
