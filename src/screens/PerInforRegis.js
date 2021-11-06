import React, {useState} from 'react';
import { Image, View,StyleSheet,TextInput, KeyboardAvoidingView,Text } from "react-native";
import {Button} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [
    {
      id: '1',
      label: 'Nam',
      value: 'male',
      color: '#2089dc',
      selected: true,
    },
    {
      id: '2',
      label: 'Nữ',
      value: 'female',
      color: '#2089dc',
      selected: false,
    },
  ];
const PerInforRegis = ({navigation}) =>{
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const onPressRadioButton = radioButtonsArray => {
        setRadioButtons(radioButtonsArray);
      };
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate()+'/'+tempDate.getMonth()+'/'+tempDate.getFullYear();
      setText(fDate)
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.container}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
                <View style={styles.container2}>
                    <Text style={styles.text}>Họ và tên:</Text>
                    <TextInput style={styles.textinput}/>
                    <Text style={styles.text}>Ngày sinh:</Text>
                    <View style={styles.container43}>
                        <TextInput style={styles.textinput1} value={text}/>
                        <Button  onPress={showDatepicker} containerStyle={styles.button1} title="Chọn" type="outline"/>
                    </View>
                    {show && (<DateTimePicker testID="showDatepicker" value={date} mode={mode} display="default" onChange={onChange}/>)}
                    <Text style={styles.text}>Giới tính:</Text>
                    <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row"/>
                    <Text style={styles.text}>Mật khẩu:</Text>
                    <TextInput style={styles.textinput}/>
                    <Text style={styles.text}>Xác nhận mật khẩu:</Text>
                    <TextInput style={styles.textinput}/>
                    
                    <Button containerStyle={styles.button} title="Xác nhận"
                      onPress={()=>navigation.navigate("Tabs")}/>
                      
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default PerInforRegis;

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
   
    text:{
        color:"black",
        fontSize: 16,
    },
    container2:{
        width:'80%',
        marginTop:15
    },
    button1:{
        width:"20%",
        marginLeft:10
    },
    image:{
        width:140,
        height:140
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        marginBottom:15,
        marginTop:5
    },
    textinput1:{
        borderWidth:1,
        borderColor:"black",
        width:"70%",
        marginBottom:15,
        marginTop:5,
    },
    button1:{
        width:"20%",
        marginLeft:32
    },
    radio:{
        fontSize: 16,
    },
    container43:{
        flexDirection: "row",
           
    },
    
});