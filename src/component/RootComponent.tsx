import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import DrawerView from './DrawerView';
import HeaderView from './HeaderView';
import CameraScreen from '../screen/CameraScreen';
import HomeScreen from '../screen/HomeScreen';

type Navigation = NavigationScreenProp<NavigationRoute<any>, any>;

const MainStackNavigator = createStackNavigator({
  [HomeScreen.routeName]: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }: { navigation: Navigation }) => ({
      headerTitle: HeaderView({
        onPress: () => {
          navigation.toggleDrawer();
        },
      }),
      headerStyle: {
        backgroundColor: '#2d2d2d',
      },
      headerTintColor: '#fff',
    }),
  },
  [CameraScreen.routeName]: { screen: CameraScreen },
});

export default createDrawerNavigator(
  {
    Home: {
      screen: MainStackNavigator,
    },
  },
  {
    contentComponent: DrawerView,
  },
);
