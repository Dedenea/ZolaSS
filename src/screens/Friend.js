import React, { useState }  from 'react';
import { Text, View, StyleSheet,Image, Alert } from "react-native";
import {Button} from 'react-native-elements'
import { useRoute } from "@react-navigation/native"

const Friend = ({navigation}) =>{
    const route = useRoute();
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const shows1 = () => {
        setVisible1(false);
        setVisible2(true);
        setVisible3(false);
      };
    const shows2 = () => {
        setVisible1(false);
        setVisible2(false);
        setVisible3(true);
      };
    const shows3 = () => {
        setVisible1(false);
        setVisible2(true);
        setVisible3(false);
      };  
    const choiceLogout=()=>{
        Alert.alert('Bạn có muốn kết bạn hay không?','',[
            {
                text:'Xóa kết bạn',
                onPress:shows1
            },
            {
                text:'Hủy'
            }
        ])
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.image} source={{uri:route.params.image}}/>
            </View>
            <View>
                <Image style={styles.image2} source={{uri:route.params.image}}/>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>{route.params.name}</Text>
            </View>
            
            {visible1 && (
            <View style={styles.container4}>
                <Button containerStyle={styles.button} title="Nhắn tin" onPress={()=>navigation.navigate('ChatOneOne',{id:route.params.id,name:route.params.name,image:route.params.image,text:route.params.text,time:route.params.time})}/>
                <Button containerStyle={styles.button} title="Xóa kết bạn" type="outline" onPress={choiceLogout}/>
            </View>)}
            {visible2 && (
            <View testID="showss" style={styles.container4}>
                <Button containerStyle={styles.button} title="Kết bạn" onPress={shows2}/>
            </View>)}
            {visible3 && (
            <View testID="showss" style={styles.container4}>
                <Button containerStyle={styles.button} title="Đã gửi kết bạn" onPress={shows3} type="outline"/>
            </View>)}
        </View>
    )
}

export default Friend;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        backgroundColor:"white",
    },
    container2:{
        width:'95%',
        marginTop:10,
        height:"20%",
        borderRadius:15,
        
        
    },
    button:{
       width:200,
       padding:10
    },
    image:{
        width:null,
        height:150,
        borderRadius:15
    },
    image2:{
        width:100,
        height:100,
        marginTop:-40,
        borderRadius:50,
        borderWidth:4,
        borderColor:"#fff"
    },
    container3:{
        flexDirection: "row",
        flexWrap: "wrap",  
        marginTop:10
    },
    text:{
        fontWeight:"bold",
        fontSize:18,
    },
    container4:{
        flexDirection: "row",
        flexWrap: "wrap",  
        marginTop:10,
        alignItems:'center'
    }
});