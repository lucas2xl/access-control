import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { User, SignIn } from '../interfaces/user';
import { getItem, removeItem, setItem } from '../utils/localStorage';
import { UserContext } from './UserContext';
// import axios from 'axios';

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
  const [loading, setLoading] = useState(true);

  const updateUser = useCallback(async (newData: Partial<User> | null) => {
    setUser((prev) =>
      prev ? { ...prev, ...newData } : { ...defaultUser, ...newData },
    );
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getItem('user');
      if (data) {
        setUser(JSON.parse(data));
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const userClone = { ...user };
    setItem('user', JSON.stringify(userClone));
  }, [user]);

  const handleSignIn = async (credentials: SignIn) => {
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

  return (
    <UserContext.Provider
      value={{ user, updateUser, handleSignIn, handleSignOut, loading }}>
      {children}
    </UserContext.Provider>
  );
};
