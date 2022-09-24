import React, { useState } from 'react';
import {
  Center,
  FormControl,
  Heading,
  ScrollView,
  useColorMode,
  useDisclose,
  VStack,
} from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { CardItem } from '../../components/cardSettings/CardItem';
import { Header } from '../../components/Header';
import { Modal } from '../../components/modal/Modal';
import { Card } from '../../components/cardSettings/Card';
import { ModalBodyItem } from '../../components/modal/ModalBodyItem';
import { Actionsheet } from '../../components/actionsheet/Actionsheet';
import { ActionsheetItem } from '../../components/actionsheet/ActionsheetItem';
import * as ImagePicker from 'expo-image-picker';
import { useUser } from '../../hooks/context-hooks/useUser';

export const Profile = () => {
  const { user, updateUser } = useUser();
  const { colorMode, toggleColorMode } = useColorMode();
  const [username, setUsername] = useState(user?.username);
  const [isDarkMode, setIsDarkMode] = useState(colorMode === 'dark');
  const {
    isOpen: showUsername,
    onOpen: onUsernameOpen,
    onClose: onUsernameClose,
  } = useDisclose();
  const {
    isOpen: showAvatar,
    onOpen: onAvatarOpen,
    onClose: onAvatarClose,
  } = useDisclose();

  function handleChangeUsername() {
    onUsernameClose();
    updateUser({ username });
  }

  async function handlePickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      onAvatarClose();
      updateUser({ photo: result.uri });
    }
  }

  function handleToggleTheme() {
    toggleColorMode();
    setIsDarkMode((prevState) => !prevState);
  }

  return (
    <AnimationStack>
      <Header>
        <Center p="4">
          <Heading
            color="trueGray.100"
            _light={{
              color: 'trueGray.900',
            }}>
            Profile
          </Heading>
        </Center>
      </Header>
      <VStack>
        <ScrollView>
          <VStack space="4" px="4" mb="40">
            <Card>
              <CardItem
                label="Profile Photo"
                iconName="image"
                icon={Feather}
                type="avatar"
                image={
                  user?.photo ||
                  'https://gravatar.com/avatar/511d14691a1d71a5636f9a54c497fdf9?s=400&d=mp&r=x'
                }
                onPress={onAvatarOpen}
              />
              <CardItem
                label="Username"
                iconName="tag"
                icon={Feather}
                type="arrow-label"
                arrowLabel={user?.username}
                onPress={onUsernameOpen}
              />
              <CardItem
                label="Password"
                iconName="lock-outline"
                icon={MaterialCommunityIcons}
                type="arrow"
              />
              <CardItem
                label="Email Address"
                iconName="email-edit-outline"
                icon={MaterialCommunityIcons}
                type="email"
                emailLabel={user?.email}
              />
            </Card>
            <Card>
              <CardItem
                label="Region"
                iconName="ios-location-outline"
                icon={Ionicons}
                type="arrow-label"
                arrowLabel="Brazil"
              />
              <CardItem
                label="Time Zone"
                iconName="timelapse"
                icon={MaterialCommunityIcons}
                type="arrow-label"
                arrowLabel="São Paulo"
              />
            </Card>
            <Card>
              <CardItem
                label="Face ID"
                iconName="face-recognition"
                icon={MaterialCommunityIcons}
                type="arrow-label"
                arrowLabel="Synced"
              />
              <CardItem
                label="Dark Mode"
                iconName="moon"
                icon={Feather}
                type="switch"
                switchValue={isDarkMode}
                onChangeSwitch={handleToggleTheme}
              />
            </Card>
            <Card>
              <CardItem
                label="Delete Account"
                iconName="trash"
                icon={Feather}
                type="arrow"
              />
            </Card>
          </VStack>
        </ScrollView>
      </VStack>

      <Modal
        headerText="Edit Username"
        isOpen={showUsername}
        onClose={onUsernameClose}
        onSave={handleChangeUsername}>
        <FormControl>
          <ModalBodyItem
            placeholder="username"
            type="text"
            value={username}
            onChangeText={setUsername}
          />
        </FormControl>
      </Modal>

      <Actionsheet isOpen={showAvatar} onClose={onAvatarClose} isCanceled>
        <ActionsheetItem
          label="Select from album"
          alignItems="center"
          onPress={handlePickImage}
        />
      </Actionsheet>
    </AnimationStack>
  );
};
