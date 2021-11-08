import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import PerInforRegis from './src/screens/PerInforRegis';
import Tabs from './src/navigation/Tabs';
import Me from './src/screens/Me';
import ChangePass from './src/screens/ChangePass';
import ChatOneOne from './src/screens/ChatOneOne';
import Friend from './src/screens/Friend';
import ForgetPass from './src/screens/ForgetPass';
import VerificationForget from './src/screens/VerificationForget';
import NewPass from './src/screens/NewPass';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitleAlign:'center',title:"ĐĂNG KÍ SỐ ĐIỆN THOẠI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="Verification" component={VerificationScreen} options={{headerTitleAlign:'center',title:"XÁC NHẬN SỐ ĐIỆN THOẠI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="PerInforRegis" component={PerInforRegis} options={{headerTitleAlign:'center',title:"THÔNG TIN NGƯỜI DÙNG",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false,headerStyle:{height:100}}}/>
        <Stack.Screen name="Me" component={Me} options={{title:"Thông tin cá nhân",headerTitleStyle: { color: '#2089dc'}}}/>       
        <Stack.Screen name="ChangeP" component={ChangePass} options={{headerTitleAlign:'center',title:"ĐỔI MẬT KHẨU",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>   
        <Stack.Screen name="ChatOneOne" component={ChatOneOne} options={({route})=>({ title: route.params.name,headerTitleAlign:'center',headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"} })} />
        <Stack.Screen name="Friendd" component={Friend} options={{title:"",headerStyle:{backgroundColor:"#fff"}}}/>
        <Stack.Screen name="Forget" component={ForgetPass} options={{headerTitleAlign:'center',title:"QUÊN MẬT KHẨU",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="VerificationForget" component={VerificationForget} options={{headerTitleAlign:'center',title:"XÁC NHẬN SỐ ĐIỆN THOẠI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="NPass" component={NewPass} options={{headerTitleAlign:'center',title:"NHẬP MẬT KHẨU MỚI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

