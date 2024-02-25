import {View, Text, Image} from 'react-native';
import React from 'react';
import {getNameInitials} from '../utils/functions';

interface avatarType {
  name: string;
  image: string;
}

export default function UserAvatar(props: avatarType) {
  const nameInittials = getNameInitials(props.name);
  return (
    <View>
      {props.image ? (
        <Image source={{uri: props.image}} />
      ) : (
        <Text>{props.name}</Text>
      )}
    </View>
  );
}
