import React,{useState} from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import {accountLogin} from '../redux/auth';
import 'react-native-gesture-handler'
const LoginScreen =({navigation})=>{
    const dispatch = useDispatch();
    const [enteredPhone, setEnteredPhone] = useState("");
    const [enteredPass, setEnteredPass] = useState("");
    const { isLoading, error, message } = useSelector(state => state.AuthenReducer);
    const onHandleLogin =() => {
        let dataLogin = {
          phone: enteredPhone,
          password:enteredPass 
        };
        dispatch(accountLogin(dataLogin));
        navigation.navigate("Tabs")
      };
    const phoneHandler = (event) => {
        
          setEnteredPhone(event.target.value);
        
      };
    const passHandler = (event) => {
          setEnteredPass(event.target.value);
      };
    const onHandleTurnBack = () => {
        navigation.navigate('Login');
        dispatch(refreshError());
      };  
    return (
        <KeyboardAvoidingView  style={styles.container}>
        <View onHandleTurnBack={onHandleTurnBack}   style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
            <View style={styles.container2}>
              <Input onChange={phoneHandler} type="text" placeholder="Số điện thoại" name="sdt"/>
              <Input onChange={passHandler} type="text" placeholder="Mật khẩu" name="pas"/>
              <Button  containerStyle={styles.button} title="Đăng nhập"
                      onPress={onHandleLogin}/>
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
