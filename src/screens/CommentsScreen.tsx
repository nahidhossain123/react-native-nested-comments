import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from '../components/UserAvatar';
import RenderComment from '../components/RenderComment';
import CommentInput from '../components/CommentInput';

const CommentList = [
  {
    id: 1,
    parentId:'',
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 2,
    parentId:'',
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 3,
    parentId:'',
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 11,
    parentId:1,
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 22,
    parentId:1,
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 33,
    parentId:1,
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 44,
    parentId:2,
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
  },
  {
    id: 55,
    parentId:3,
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
  },
];
export default function CommentsScreen() {
  const [comments,setComments] = useState(CommentList)
  const addComment = (cmt)=>{

  }
  console.log("newComment",comments)
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#FFF'}}>
      <StatusBar animated={true} backgroundColor="transparent" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({item, index}) => (
         !item.parentId &&<RenderComment item={item} index={index} />
        )}
      />
      <CommentInput callback={(obj)=>setComments(prevState=>([...prevState,obj]))} />
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
