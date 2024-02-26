import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from '../components/UserAvatar';
import RenderComment from '../components/RenderComment';

const CommentList = [
  {
    id: 1,
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 2,
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 3,
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
  },
];

export default function CommentsScreen() {
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#FFF'}}>
      <StatusBar animated={true} backgroundColor="transparent" />
      <FlatList
        data={CommentList}
        renderItem={({item, index}) => (
          <RenderComment item={item} index={index} />
        )}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholderTextColor={'#64676B'}
          placeholder="Comment here..."
          style={{
            flex: 1,
            backgroundColor: '#F0F2F5',
            borderRadius: 30,
            paddingHorizontal: 20,
          }}
        />
        <Image source={require('../assets/send.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
