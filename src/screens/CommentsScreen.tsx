import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserAvatar from '../components/UserAvatar';
import RenderComment from '../components/RenderComment';
import CommentInput from '../components/CommentInput';

const CommentList = [
  {
    id: '1',
    parentId:'',
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '2',
    parentId:'',
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '3',
    parentId:'',
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '11',
    parentId:'1',
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '22',
    parentId:'1',
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '33',
    parentId:'1',
    text: 'comment 1',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '44',
    parentId:'2',
    text: 'comment 2',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
  {
    id: '55',
    parentId:'3',
    text: 'comment 3',
    user: {
      name: 'Nahid Hossain',
    },
    children:[],
  },
];

export type comment = {
  id: string,
  parentId: string,
  text: string,
  children:comment[],
  user: {
      name: string
  },
}

export type commentCallbackFn=(param:comment)=>void

export default function CommentsScreen() {
  const [comments,setComments] = useState<comment[]>(CommentList)
  const addComment = (cmt:comment)=>{

  }  
  
  const createNestedArray = ()=>{
    const commentsHashMap:{[id:string]:comment}={}
    CommentList.forEach(item=>{
      commentsHashMap[item.id]=item
    })
    const result: comment[] = [];
    CommentList.forEach(item=>{
      if(item.parentId){
        let parent = commentsHashMap[item.parentId]
        parent.children.push(item)
      }else{
        result.push(commentsHashMap[item.id])
      }
    })
    console.log('NestedArray',result)
  }

  useEffect(()=>{
    createNestedArray()
  },[])


  console.log("newComment",comments)
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#FFF'}}>
      <StatusBar animated={true} backgroundColor="transparent" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({item, index}:{item:comment,index:number}) => (
         <RenderComment item={item} index={index} />
        )}
      />
      <CommentInput callback={(obj:comment)=>{
        Keyboard.dismiss()
        setComments(prevState=>([...prevState,obj]))
      }} />
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
