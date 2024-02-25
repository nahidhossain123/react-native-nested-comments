import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from '../components/UserAvatar';

const CommentList = [
  {
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
  },
];

interface RenderItemType {
  item: {
    text: string;
    user: {
      name: string;
      image: string;
    };
  };
  index: number;
}
const RenderItem = (porps: RenderItemType) => {
  return (
    <View>
      <UserAvatar user={porps.item.user} />
    </View>
  );
};

export default function Comments() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="transparent" />
      <FlatList
        data={CommentList}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
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
