import React, { ReactNode } from 'react';
import { HStack, IModalProps, Modal as M } from 'native-base';
import { ModalFooterItem } from './ModalFooterItem';

interface MoldaProps extends IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  headerText: string;
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  onSave,
  headerText,
  ...rest
}: MoldaProps) => {
  return (
    <M
      isOpen={isOpen}
      onClose={onClose}
      safeAreaTop={true}
      avoidKeyboard
      bg={'rgba(0,0,0,0.5)'}
      {...rest}>
      <M.Content
        bg="trueGray.800"
        rounded="2xl"
        _light={{
          bg: 'trueGray.200',
        }}>
        <M.CloseButton
          _pressed={{
            bg: 'trueGray.700',
            rounded: 'full',
          }}
          _light={{
            _pressed: {
              bg: 'trueGray.300',
            },
          }}
        />
        <M.Header
          borderColor="trueGray.700"
          _text={{
            color: 'trueGray.200',
            fontSize: 'lg',
          }}
          bg="trueGray.800"
          _light={{
            bg: 'trueGray.200',
            borderColor: 'trueGray.300',
            _text: {
              color: 'trueGray.800',
            },
          }}>
          {headerText}
        </M.Header>
        <M.Body>{children}</M.Body>

        <M.Footer
          bg="trueGray.800"
          borderColor="trueGray.700"
          _light={{
            bg: 'trueGray.200',
            borderColor: 'trueGray.300',
          }}>
          <HStack w="full" h="full" justifyContent="space-between">
            <ModalFooterItem type="cancel" onPress={onClose} />
            <ModalFooterItem type="save" onPress={onSave} />
          </HStack>
        </M.Footer>
      </M.Content>
    </M>
  );
};
