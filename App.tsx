import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Provider} from 'react-redux';
import {store} from './store';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES, type RootStackParamList} from './navigation.types';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const RootStack = createNativeStackNavigator({
  initialRouteName: ROUTES.HOME,
  screens: {
    [ROUTES.HOME]: HomeScreen,
    [ROUTES.PRODUCTS]: ProductScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default App;
