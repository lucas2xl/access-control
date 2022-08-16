import { LinearGradient } from 'expo-linear-gradient';
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  dependencies: {
    'linear-gradient': LinearGradient,
  },
});
