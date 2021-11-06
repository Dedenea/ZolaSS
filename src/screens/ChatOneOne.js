import React, { useState, useCallback, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';
import moment from "moment";
import { useRoute } from "@react-navigation/native"
const ChatOneOne = ({navigation}) =>{
    const route = useRoute();
    const [messages, setMessages] = useState([]);
 
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: route.params.text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: route.params.name,
            avatar: route.params.image,
          },
          time:route.params.time
        },
      ])
    }, [])
   
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
   
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }

export default ChatOneOne;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    container2:{
        width:'80%',
        marginTop:50
    }
});