import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {NoticeScreen} from '../screens/NoticeScreen';
import {SocialMediaScreen} from '../screens/SocialMediaScreen';
import {AnswerUpdsScreen} from '../screens/AnswerUpdsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
      <Stack.Screen name="SocialMediaScreen" component={SocialMediaScreen} />
      <Stack.Screen name="AnswerUpdsScreen" component={AnswerUpdsScreen} />
    </Stack.Navigator>
  );
};
