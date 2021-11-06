import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Button} from 'react-native-elements'
const ForgetPass = ({navigation}) =>{
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
            <View style={styles.container2} >
               <Text style={styles.text2}>Nhập số điện thoại:</Text>
               <TextInput style={styles.textinput} type="text" placeholder="" name="maxn"/>
            </View>
            <Button containerStyle={styles.button} title="Xác nhận"
                      onPress={()=>navigation.navigate("VerificationForget")}/>
        </KeyboardAvoidingView>
    )
}
export default ForgetPass;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        backgroundColor:"white",
    },
    container2:{
        marginTop:25,
        width:"70%"
    },
    button:{
        padding:5,
        width:300
    },
    image:{
        width:150,
        height:150,
        marginTop:80,
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        marginBottom:15,
        marginTop:5
    },
});
