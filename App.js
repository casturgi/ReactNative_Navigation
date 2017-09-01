import {
  TabNavigator,
} from 'react-navigation';
import Welcome from './screens/Welcome';
import HomeScreen from './screens/HomeScreen';

export default TabNavigator({
  Home: { screen: HomeScreen },
  Welcome: { screen: Welcome }
});
