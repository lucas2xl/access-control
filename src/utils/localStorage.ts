import AsyncStorage from '@react-native-async-storage/async-storage';

export type StorageKeys = 'settings' | 'user';

type Callback<T, R> = (args: T) => Error | R;
export const getItem = async (key: StorageKeys, cb?: Callback) =>
  AsyncStorage.getItem(`access-control:${key}`, cb);
export const removeItem = async (key: StorageKeys, cb?: Callback) =>
  AsyncStorage.removeItem(`access-control:${key}`, cb);
export const setItem = async (key: StorageKeys, value: string, cb?: Callback) =>
  AsyncStorage.setItem(`access-control:${key}`, value, cb);
// export const removeMany = async (keys: StorageKeys[], cb?: Callback) =>
//   AsyncStorage.multiRemove(keys, cb);
