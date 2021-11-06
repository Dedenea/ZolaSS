import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet,FlatList, SafeAreaView, ActivityIndicator, Image,Pressable,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from "react-native-elements";


const SearchScreen = ({navigation}) =>{

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
        <SafeAreaView>
            {isLoading ? <ActivityIndicator/>:(
                <View style={styles.con}>
                <View style={styles.con2}>
                    <TextInput placeholder="Nhập bạn bè cần tìm" style={styles.textinput}/>
                    <AntDesign style={styles.icon} name="search1" size={24} color="black" />
                </View>
                <FlatList
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
                        <Button containerStyle={styles.button} title="Thêm bạn"/>
                    </View>
                </Pressable>  
                )}
            /></View>)}
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    con:{
        backgroundColor:"#fff",
        width:"100%",
        height:"100%",
    },
    con2:{
        flexDirection:"row",
        backgroundColor:"#fff",
    },
    container:{
        flexDirection:'column',
        width:"100%",
        alignItems:"center",
        padding:10,
        backgroundColor:"#fff"
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
    aa:{
        marginLeft:50
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
    button:{
        width:100,
        marginTop:10
    }
});