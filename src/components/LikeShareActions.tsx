import {View, Text} from 'react-native';
import React from 'react';

export default function LikeShareActions() {
  const addReply = () => {};
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 12, color: '#000', padding: 5}}>16 m</Text>
      <Text style={{fontSize: 12, color: '#000', marginLeft: 10, padding: 5}}>
        Like
      </Text>
      <Text
        onPress={() => addReply()}
        style={{fontSize: 12, color: '#000', marginLeft: 10, padding: 5}}>
        Reply
      </Text>
    </View>
  );
}
