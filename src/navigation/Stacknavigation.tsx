import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Comments from '../screens/Comments';

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    );
  }
}

export default Stacknavigation;
