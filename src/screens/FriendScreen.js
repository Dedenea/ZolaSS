import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet,FlatList, SafeAreaView, ActivityIndicator, Image,Pressable,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from "react-native-elements";

const FriendScreen = ({navigation}) =>{

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://617fa6a3055276001774fb98.mockapi.io/Test')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    
    return (
        <View>
            {isLoading ? <ActivityIndicator/>:(
                <View style={styles.con}>
                <View style={styles.con2}>
                    <TextInput placeholder="Nhập bạn bè cần tìm" style={styles.textinput}/>
                    <AntDesign style={styles.icon} name="search1" size={24} color="black" />
                </View>
                <View style={styles.b1}><Text style={styles.text}>Lời mời kết bạn</Text></View>
                <FlatList style={styles.con3}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({item})=>(
                <Pressable style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Image source={{uri:item.image}} style={styles.avatar}/>
                        <View style={styles.cenContainer}>
                            <Text style={styles.username}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.lastmess}>{item.text}</Text>
                        </View>
                        <Button containerStyle={styles.button} title="Chấp nhận"/>
                    </View>
                </Pressable>  
                )}/>
                <View style={styles.b2}><Text style={styles.text}>Danh sách bạn bè</Text></View>
                <FlatList style={styles.con4}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({item})=>(
                <Pressable onPress={()=>navigation.navigate('Friendd',{id:item.id,name:item.name,image:item.image,text:item.text,time:item.time})} style={styles.container}>
                    <View style={styles.leftContainer1}>
                        <Image source={{uri:item.image}} style={styles.avatar}/>
                        <View style={styles.cenContainer}>
                            <Text style={styles.username}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.lastmess}>{item.text}</Text>
                        </View>
                    </View>
                </Pressable>  
                )}/>
            </View>)}
        </View>
    )
}

export default FriendScreen;

const styles = StyleSheet.create({
    con:{
        width:"100%",
        height:"100%",
        
    },
    con2:{
        flexDirection:"row",
        backgroundColor:"#fff",
        width:"100%",
        height:"8%",
        
    },
    con3:{
        width:"100%",
        height:"30%",
        
    },
    con4:{
        width:"100%",
        height:"50%",
        backgroundColor:"#fff",
    },
    container:{
        flexDirection:'column',
        width:"100%",
        alignItems:"center",
        padding:10,
        backgroundColor:"#fff"
    },
    leftContainer1:{
        flexDirection:'row',
        width:"100%"
    },
    leftContainer:{
        flexDirection:'row',
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:50,
    },
    username:{
        fontWeight:'bold',
        fontSize:16,
    },
    lastmess:{
        fontSize:16,
        color:'grey',
        width:150,
        marginTop:15
    },
    cenContainer:{
        flexDirection:'column',
        paddingRight:25,
        marginLeft:10
    },
    time:{
        fontSize:16,
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:"80%",
        marginBottom:15,
        marginTop:15,
        marginLeft:"10%",
        marginRight:"10%",
        borderRadius:10,
        borderColor:"#a6a6a6"
    },
    icon:{
        position: "absolute",
        marginLeft:"83%",
        marginTop:15
    },
    b1:{
        backgroundColor:"#fff",
        height:"5%",
        width:"100%"
    },
    b2:{
        backgroundColor:"#fff",
        marginTop:"2%",
        height:"5%",
        width:"100%"
    },
    text:{
        fontWeight:"bold",
        fontSize:16,
        marginLeft:20
    },
    button:{
        width:100,
        marginTop:10
    }
});