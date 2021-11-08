import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet,Pressable, Alert} from 'react-native';
import ChatTab from '../screens/ChatTab';
import GroupTab from '../screens/GroupTab';
import { FontAwesome,FontAwesome5  , Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchScreen from "../screens/SearchScreen";
import AddressLLScreen from "../screens/AddressLLScreen";
import FriendScreen from "../screens/FriendScreen";
import { useDispatch } from 'react-redux';
import { accountLogout } from "../redux/auth";
const Tab=createBottomTabNavigator();
const Tabs = ({navigation}) =>{
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(accountLogout());
    };    
    const choiceLogout=()=>{
        Alert.alert('Bạn có muốn thoát hay không?','',[
            {
                text:'Thoát',
                onPress:()=>{handleLogout},
                onPress:()=>{navigation.navigate("Login")}  
            },
            {
                text:'Hủy'
            }
        ])
    }
    return (
        <Tab.Navigator initialRouteName="ChatTab" screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: { fontSize: 12, fontWeight:'bold' },
            tabBarActiveTintColor:'#2089dc',
            tabBarInactiveTintColor:'#cccccc',
            tabBarIndicatorStyle:{
            backgroundColor:'#fff',
            height:5
        },
        tabBarShowIcon:true,
        }}>
            <Tab.Screen name="Search" component={SearchScreen}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Tìm",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><Ionicons name="settings-outline" style={{marginRight:15}} size = {25} color = "black" /></Pressable>,
                        tabBarIcon: ({color}) => <Ionicons name="search" color={color} size={30}/> }}/>
            <Tab.Screen name="Friend" component={FriendScreen}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Bạn bè",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><Ionicons name="settings-outline" style={{marginRight:15}} size = {25} color = "black" /></Pressable>,
                        tabBarIcon: ({color}) => <FontAwesome5 name="user-friends" color={color} size={30}/> }}/>            
            <Tab.Screen name="ChatTab" component={ChatTab}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Chat",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><Ionicons name="settings-outline" style={{marginRight:15}} size = {25} color = "black" /></Pressable>, 
                        tabBarIcon: ({color}) => <Ionicons name="chatbubbles" color={color} size={30}/> }}/>
            <Tab.Screen name="GroupTab" component={GroupTab}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Nhóm",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><Ionicons name="settings-outline" style={{marginRight:15}} size = {25} color = "black" /></Pressable>, 
                        tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-group" color={color} size={30}/> }}/>
            <Tab.Screen name="AddressLL" component={AddressLLScreen}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Danh bạ",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>, 
                        headerRight:() =><Pressable onPress={choiceLogout}><Ionicons name="settings-outline" style={{marginRight:15}} size = {25} color = "black" /></Pressable>,
                        tabBarIcon: ({color}) => <FontAwesome name="address-book" color={color} size={30}/> }}/>
        </Tab.Navigator>    
    )
}
export default Tabs;
const styles = StyleSheet.create({});

