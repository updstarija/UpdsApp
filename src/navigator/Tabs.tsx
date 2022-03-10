import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { globalColors } from '../theme/appTheme';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from './NavigatorHome';
import { StackNavigatorStudent } from './NavigatorStudent';

const Tab = createBottomTabNavigator();

export const Tabs=()=> {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={({route})=> ({
        tabBarActiveTintColor:globalColors.primary,
        headerShown: false,
        tabBarStyle:{
            
            borderTopColor: globalColors.primary,
            borderTopWidth:0,
            elevation:0
        },
        tabBarIcon:({color})=>{
            let iconName: string='';
            switch (route.name) {
                case 'StackNavigator':
                    iconName='home'
                    break;
                case 'StackNavigatorStudent':
                    iconName='school'
                default:
                    break;
            }
            return <Icon name={iconName} size={30} color={color}/>
        }
    })}>
        <Tab.Screen name="StackNavigator" component={StackNavigator} options={{title:'Inicio'}}/>
        <Tab.Screen name="StackNavigatorStudent" component={StackNavigatorStudent}  options={{title:'Estudiante'}}/>
    </Tab.Navigator>
  );
}