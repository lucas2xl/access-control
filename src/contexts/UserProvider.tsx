import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { User, SignIn } from '../interfaces/user';
import { getItem, removeItem, setItem } from '../utils/localStorage';
// import axios from 'axios';
import { ContextProps, UserContext } from './UserContext';

type ProviderProps = {
  children: ReactNode;
};

const defaultUser: User = {
  id: '',
  username: '',
  photo: null,
  email: '',
  city: '',
  role: 'Admin',
};

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = useCallback(async (newData: Partial<User> | null) => {
    setUser((prev) =>
      prev ? { ...prev, ...newData } : { ...defaultUser, ...newData },
    );
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getItem('user');
      if (data) setUser(JSON.parse(data));
      else setUser(defaultUser);
    })();
  }, []);

  useEffect(() => {
    const settingsClone = { ...user };
    setItem('settings', JSON.stringify(settingsClone));
  }, [user]);

  const handleSignIn = async (credentials: SignIn) => {
    console.log(credentials);
    setUser({
      id: '1',
      email: 'lucas@gmail.com',
      city: 'Florianópolis',
      role: 'admin',
      username: 'Lucas Aguiar',
    });
  };

  const handleSignOut = async () => {
    setUser(null);
    removeItem('user');
    // delete axios.defaults.headers.common.userId;
  };

  const value: ContextProps = {
    user,
    updateUser,
    handleSignIn,
    handleSignOut,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.displayName = 'UserContextProvider';
