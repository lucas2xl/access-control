import { createContext } from 'react';
import { SignIn, User } from '../interfaces/user';

export type UserContextProps = {
  user: User | null;
  updateUser: (newData: Partial<User> | null) => void;
  handleSignIn: (credentials: SignIn) => Promise<void>;
  handleSignOut: () => void;
  loading: boolean;
};

export const UserContext = createContext<UserContextProps | null>(null);
