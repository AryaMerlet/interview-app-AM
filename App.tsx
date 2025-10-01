import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Provider} from 'react-redux';
import {store} from './store';
import {createStaticNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES, type RootStackParamList} from './navigation.types';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const RootStack = createBottomTabNavigator<RootStackParamList>({
  initialRouteName: ROUTES.HOME,
  screens: {
    [ROUTES.HOME]: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },
    [ROUTES.PRODUCTS]: {
      screen: ProductScreen,
      options: {
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            name={focused ? 'cart' : 'cart-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default App;
