import { View, Text, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const CommentInput = ({ callback }) => {
    const [cmtText, setCmtText] = useState('')
    const newComment = () => {
        callback({
            id: new Date(),
            parentId: '',
            text: cmtText,
            user: {
                name: 'Nahid Hossain',
            },
        })
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    placeholderTextColor={'#64676B'}
                    placeholder="Comment here..."
                    onChange={(event) => setCmtText(event.nativeEvent.text)}
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