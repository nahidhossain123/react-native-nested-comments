import {View, Text} from 'react-native';
import React, {useState} from 'react';
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
  const [levelComments, setLevelComments] = useState([]);
  return (
    <View>
      <Comment item={props.item} index={props.index} />
      {levelComments?.map(item => (
        <View>
          <RenderComment item={item} index={props.index} />
        </View>
      ))}
    </View>
  );
}
