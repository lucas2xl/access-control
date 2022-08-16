import { createContext } from 'react';
import { SignIn, User } from '../interfaces/user';

export type ContextProps = {
  user: User | null;
  updateUser: (newData: Partial<User> | null) => void;
  handleSignIn: (credentials: SignIn) => Promise<void>;
  handleSignOut: () => void;
};

export const UserContext = createContext<ContextProps | null>(null);
