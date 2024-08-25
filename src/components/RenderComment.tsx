import {View, Text} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from './UserAvatar';
import LikeShareActions from './LikeShareActions';
import Comment from './Comment';
import { comment } from '../screens/CommentsScreen';
export interface RenderItemType {
  item: {
    text: string;
    user: {
      name: string;
      image?: string;
    };
    children:comment[]
  };
  index: number;
}

export default function RenderComment(props: RenderItemType) {
  return (
    <View>
      <Comment item={props.item} index={props.index} />
      {props.item.children?.map(item => (
        <View style={{marginLeft:50}}>
          <RenderComment item={item} index={props.index} />
        </View>
      ))}
    </View>
  );
}
