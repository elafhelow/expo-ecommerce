import react from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  TextInput
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  return(
<View style={styles.container}>
  <View style={styles.ViewPro}>
  <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Back}
        >
         <MaterialIcons name="arrow-back-ios" size={28} color="white" />
          
        </TouchableOpacity>
    <View style={styles.coloum}>
    <Image style= {styles.profileImg}  source={require("../assets/face.jpg")}/>
    <Text style={{fontSize:24,fontWeight:'bold',marginTop:10,color:'white'}}> Elaf helou</Text>

    </View>
    <TextInput style={{
   height: '80px',
   fontSize: '20px',
   width:350,
   backgroundColor: "white",
   alignSelf: "center",
   borderColor:'gray',
   color:'gray',
   borderBottomWidth:1,
   padding:10,
   marginTop:50,
 shadowColor:'gray'
  }} placeholder="elafhelou" 
   onChangeText={(pass => { this.setState({ pass }) })} />
 <TextInput style={{
   height: '80px',
   fontSize: '20px',
   width:350,
   backgroundColor: "white",
   alignSelf: "center",
   borderColor:'gray',
   color:'gray',
   borderBottomWidth:1,
   padding:10,
   marginTop:50,
 shadowColor:'gray'
  }} placeholder="+920598913115" onChangeText={(pass => { this.setState({ pass }) })} />
   <TextInput style={{
   height: '80px',
   fontSize: '20px',
   width:350,
   backgroundColor: "white",
   color:'gray',
   alignSelf: "center",
   borderColor:'gray',
   borderBottomWidth:1,
   padding:10,
   marginTop:50,
 shadowColor:'gray'
  }} placeholder="elafjabr1@gmail.com" onChangeText={(pass => { this.setState({ pass }) })} />
   <TextInput style={{
   height: '80px',
   fontSize: '20px',
   color:'gray',
   width:350,
   backgroundColor: "white",
   alignSelf: "center",
   borderColor:'gray',
   borderBottomWidth:1,
   padding:10,
   marginTop:50,
 shadowColor:'gray'
  }} placeholder="Palestine-Gaza" onChangeText={(pass => { this.setState({ pass }) })} />
   <View  style={styles.buyNow}>
<Text style={{ alignSelf: "center",
fontSize:26,fontWeight:"bold" ,marginTop:12,color:"white",}}> Save</Text>
    </View>
  </View>


</View>


  )}
  const styles = StyleSheet.create({
    container: {
      height:800,
    backgroundColor: 'white',

   },ViewPro:{
    height:270,
    backgroundColor:'#F2789F',
    borderBottomEndRadius:35,
    borderBottomStartRadius:35

   },coloum:{
    flexDirection:"column" ,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:70
   }
   ,profileImg:{
    height:130,
    width:130,
    borderRadius:70
   },
   Back:{
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,
  
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginEnd:340
  }, buyNow:{
    width:350,
    height:60,
   
    borderRadius:60,
    shadowColor: "gray",
  marginTop:60,
    alignSelf: "center",
    backgroundColor:"#F2789F"
  }

})