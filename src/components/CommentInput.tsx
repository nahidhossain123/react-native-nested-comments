import { View, Text, TextInput, Image, Pressable } from 'react-native'
import React, { Children, useState } from 'react'
import { commentCallbackFn } from '../screens/CommentsScreen'

interface PropsType{
    callback:commentCallbackFn
}

const CommentInput = ({ callback }:PropsType) => {
    const [cmtText, setCmtText] = useState('')
    const newComment = () => {
        callback({
            id: (new Date()).toString(),
            parentId: '',
            text: cmtText,
            children:[],
            user: {
                name: 'Nahid Hossain',
            },
        })
        setCmtText('')
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    placeholderTextColor={'#64676B'}
                    placeholder="Comment here..."
                    onChange={(event) => setCmtText(event.nativeEvent.text)}
                    defaultValue={cmtText}
                    style={{
                        flex: 1,
                        backgroundColor: '#F0F2F5',
                        borderRadius: 30,
                        paddingHorizontal: 20,
                    }}
                />
                <Pressable onPress={newComment}>
                    <Image source={require('../assets/send.png')} />
                </Pressable>
            </View>
        </View>
    )
}

export default CommentInput