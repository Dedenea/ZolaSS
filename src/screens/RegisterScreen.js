import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements'
const RegisterScreen = ({navigation}) =>{
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
            <View style={styles.container2} >
               <Input type="text" placeholder="Số điện thoại" name="npas"/>
               <Button containerStyle={styles.button} title="Đăng kí"
                      onPress={()=>navigation.navigate("Verification")}/>
            </View>
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen;

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
        marginTop:50,
    },
    button:{
        padding:15
    },
    image:{
        width:150,
        height:150,
        
    },
});
