import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './(tabs)/index';
import DetailScreen from './details';
  

const screens = {
  Home: {
    screen: Home,
  },
  DetailScreen: {
    screen: DetailScreen,
  },  
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

