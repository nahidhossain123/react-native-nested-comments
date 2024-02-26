import {View, Text} from 'react-native';
import React from 'react';
import UserAvatar from './UserAvatar';
import LikeShareActions from './LikeShareActions';
import Comment from './Comment';
export interface RenderItemType {
  item: {
    text: string;
    user: {
      name: string;
      image?: string;
    };
  };
  index: number;
}

export default function RenderComment(props: RenderItemType) {
  return (
    <View>
      <Comment item={props.item} index={props.index} />
    </View>
  );
}
