import 'react-native-gesture-handler';
import React from 'react'
import { StackNavigator } from './src/navigator/NavigatorHome';
import { NavigationContainer } from '@react-navigation/native';
import {LogBox} from 'react-native'
import { Tabs } from './src/navigator/Tabs';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <Tabs/>
    </NavigationContainer>
  )
}

export default App;