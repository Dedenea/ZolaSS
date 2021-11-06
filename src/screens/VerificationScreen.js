import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Button,Input} from 'react-native-elements'
const VerificationScreen = ({navigation}) =>{
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
            <View style={styles.container2} >
               <TextInput style={styles.textinput} type="text" placeholder="" name="maxn"/>
               <Button containerStyle={styles.button} title="Xác nhận"
                      onPress={()=>navigation.navigate("PerInforRegis")}/>
                <Button containerStyle={styles.button} title="Gửi lại mã" type="outline" 
                      onPress={()=>console.log("Từ từ")}/>
            </View>
        </KeyboardAvoidingView>
    )
}
export default VerificationScreen;

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
        alignItems:"center",
        marginTop:50
    },
    button:{
        padding:5,
        width:300
    },
    image:{
        width:150,
        height:150,
        
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:300,
        marginBottom:15
    }
});
