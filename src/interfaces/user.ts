export type User = {
  id: string;
  username: string;
  email: string;
  city?: string;
  photo?: string | null;
  role: string;
};

export interface SignIn {
  phone: string;
  password: string;
}
