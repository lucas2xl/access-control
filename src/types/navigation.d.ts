import { StackRoutes } from '../navigation/types';

declare global {
  namespace ReactNavigation {
    type RootParamList = StackRoutes;
  }
}
