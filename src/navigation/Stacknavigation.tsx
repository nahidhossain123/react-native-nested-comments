import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';

export type RootStackPramList = {
  Home: undefined;
  Comments: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

export class Stacknavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    );
  }
}

export default Stacknavigation;
