import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements'
const LoginScreen =({navigation})=>{
    return (
        <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
            <View style={styles.container2}>
              <Input type="text" placeholder="Số điện thoại" name="sdt"/>
              <Input type="text" placeholder="Mật khẩu" name="pas"/>
              <Button containerStyle={styles.button} title="Đăng nhập"
                      onPress={()=>navigation.navigate("Tabs")}/>
              <Button containerStyle={styles.button} title="Đăng kí" type="outline" 
                      onPress={()=>navigation.navigate("Register")}/>
            </View>
            <View style={{alignItems:"center",marginTop:15}}>
              <Text onPress={()=>navigation.navigate("Forget")} style={styles.text}>Quên mật khẩu</Text>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    button:{
        padding:15
    },
    image:{
        width:150,
        height:150
    },
    text:{
        color:"black",
        fontWeight:"bold"
    },
    container2:{
        width:'80%',
        marginTop:50
    }
});
