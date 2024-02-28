import {View, Text} from 'react-native';
import React from 'react';
import UserAvatar from './UserAvatar';
import LikeShareActions from './LikeShareActions';
import {RenderItemType} from './RenderComment';

export default function Comment(props: RenderItemType) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          alignItems: 'flex-start',
        }}>
        <UserAvatar user={props.item.user} />
        <View style={{marginLeft: 10}}>
          <View
            style={{backgroundColor: '#F0F2F5', padding: 10, borderRadius: 20}}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              {props.item.user.name}
            </Text>
            <Text style={{color: '#000'}}>{props.item.text}</Text>
          </View>
          <LikeShareActions />
          <Text>Show Replies</Text>
        </View>
      </View>
    </View>
  );
}
