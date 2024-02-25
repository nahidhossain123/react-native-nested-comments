import {View, Text, Button} from 'react-native';
import React from 'react';
import {RootStackPramList} from '../navigation/Stacknavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackPramList, 'Home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Comments');
        }}
        title="Comment"
      />
    </View>
  );
}
