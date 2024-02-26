import {View, Text, Image} from 'react-native';
import React from 'react';
import {getNameInitials} from '../utils/functions';

interface avatarType {
  user: {
    name: string;
    image?: string;
  };
  isName?: boolean;
}

export default function UserAvatar(props: avatarType) {
  const nameInittials = getNameInitials(props.user.name);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#000',

          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.user.image ? (
          <Image source={{uri: props.user.image}} />
        ) : (
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#FFF'}}>
            {nameInittials}
          </Text>
        )}
      </View>
      {props.isName && (
        <Text style={{color: '#000', marginLeft: 10}}>{props.user.name}</Text>
      )}
    </View>
  );
}
