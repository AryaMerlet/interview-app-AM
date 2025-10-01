import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation as useRootNavigation} from '@react-navigation/native';

// source of truth for route names
export const ROUTES = {
  HOME: 'Home',
  PRODUCTS: 'Products',
  // use as const to make the object properties readonly and ensure type safety
} as const;

// Define what parameters each route expects
export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PRODUCTS]: undefined;
};

// Type-safe navigation prop with autocomplete and param checking for all routes
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Type safe navigation hook to use in components and screens
export const useNavigation = () => {
  return useRootNavigation<NavigationProp>();
};
