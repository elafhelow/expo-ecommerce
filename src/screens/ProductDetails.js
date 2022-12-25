import react from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ProductDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <ImageBackground
      source={require("../assets/homePhoto.jpg")}
      style={{ height: 400 }}
    >
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.Back}>
        <MaterialIcons name="arrow-back-ios" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.8} style={styles.heart}>
          <Ionicons color={"black"} name={"heart-outline"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.bag}>
          <Feather name="shopping-bag" size={22} color="black" />
        </TouchableOpacity>
      </View>
      {/* 

         
 
     <View style={styles.container}> <View style={{marginTop:20}}>
      <View style= {styles.row}  >
      <Text style={styles.productName}{item.nameP}</Text>
      <View style={styles.pricView}>
      <Text style={styles.price}>{item.price}</Text>
      </View>
      </View>
      

      <Text  style={ {
    color: 'gray',
    marginTop: 6,
    fontSize: 18,
    
    marginLeft: 21,
    marginRight:20,
    marginBottom:7
  }}>NEW RULES OF MATTE: Our matte lipstick is comfortable, 
       </Text>
       <View style= {styles.row} >  <View style= {styles.Rate} >
  <TouchableOpacity
          activeOpacity={0.8}
          style={{marginStart:21, marginBottom:4}}
        >
           <Ionicons name="ios-star" size={20} color="#f7b416" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginStart:4, marginBottom:4}}
        >
           <Ionicons name="ios-star" size={20} color="#f7b416" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginStart:4, marginBottom:4}}
        >
           <Ionicons name="ios-star" size={20} color="#f7b416" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginStart:4, marginBottom:4}}
        >
           <Ionicons name="ios-star" size={20} color="#f7b416" />
        </TouchableOpacity>
        <Text style={{marginStart:10,fontSize:16,marginBottom:4}} >4.3</Text>
  </View></View>
      
 
<View style= {styles.row}>
  <Text style={ {
    color: 'black',
    marginTop:15,
    fontSize: 24,
    fontWeight: "bold",
   marginStart:18,
  
  }}> Colors</Text>
   <View style={styles.rowcolor}>
<View  style={{ right: 0,
    top: 10,
    width: 35,
    height: 35,
    zIndex: 10,
    borderColor:'#c4c4c2',
    borderWidth:5,
    backgroundColor: "#F50606",
    borderRadius: 25,
    marginStart:20,
    marginEnd:8}} ></View>
<View  style={{ right: 0,
    top: 10,
    width: 35,
    height: 35,
    zIndex: 10,
    backgroundColor: "#B22626",
    borderRadius: 25,
    marginEnd:8,
 
    }} ></View>
    <View  style={{ right: 0,
    top: 10,
    width: 35,
    height: 35,
    zIndex: 10,
    marginEnd:8,
    backgroundColor: "#EF2E6A",
    borderRadius: 25,
    }} ></View>
     <View  style={{ right: 0,
    top: 10,
    width: 35,
    height: 35,
    zIndex: 10,
    marginEnd:8,
    backgroundColor: "#A80756",
    borderRadius: 25,
    }} ></View>
 <View  style={{ right: 0,
    top: 10,
    width: 35,
    height: 35,
    zIndex: 10,
    marginEnd:2,
    backgroundColor: "#EE4242",
    borderRadius: 25,
    }} ></View>
   
   </View>

   
   </View>
 <View style= {styles.row}>
  <Text style={ {
    color: 'black',
    marginTop:30,
    fontSize: 24,
    fontWeight: "bold",
   marginStart:18,
  
  }}> Quantity</Text>
   <View style={styles.Quantityrow}>
   <TouchableOpacity
        
          style={styles.minus}
        >
             <Entypo name="minus" size={24} color="black" />
        </TouchableOpacity>

    <Text style={{fontSize:28, marginEnd:73,fontWeight:'600',marginTop:7}}>2</Text>
    <TouchableOpacity
        
          style={styles.plus}
        >
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>

   
   </View>
   
   
   </View>
  
    <TextInput style={{
   height: '170px',
   fontSize: '20px',
   width:350,
   backgroundColor: "white",
   alignSelf: "center",
   borderColor:'gray',
   borderWidth:1,
   borderRadius:15,
   marginTop:20,
paddingStart:15,
  paddingBottom:90,shadowColor:'gray'
  }} placeholder="Add Note" onChangeText={(pass => { this.setState({ pass }) })} />
 
  
    <View  style={styles.buyNow}>
<Text style={{ alignSelf: "center",
fontSize:26,fontWeight:"bold" ,marginTop:12,color:"white",}}>Add to cart</Text>
    </View>

    </View>
    
    </View>
       */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    height: 600,
    marginTop: 300,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  homeImg: {
    width: "100%",
    height: 600,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    alignSelf: "center",

    borderColor: "gray",
    elevation: 20,
    shadowColor: "gray",
    marginTop: 14,
  },
  productName: {
    fontSize: 22,

    marginTop: 2,
    marginStart: 20,
    marginLeft: 10,
    fontWeight: "800",
  },
  price: {
    fontSize: 26,
    color: "white",
    marginTop: 6,
    marginRight: 7,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Rate: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  rowcolor: {
    flexDirection: "row",
    alignItems: "center",

    marginEnd: 20,
  },
  imgeView: {
    height: 450,
    width: 350,
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    elevation: 20,
    shadowColor: "gray",
    margin: 20,
  },
  pricView: {
    width: 100,
    height: 50,
    backgroundColor: "#F999B7",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "gray",
    marginEnd: 15,
    marginTop: 1,
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 30,
    height: 30,
    zIndex: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginEnd: 7,
  },
  coloum: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginEnd: 70,
    marginTop: 10,
  },
  Quantityrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 17,
  },
  buyNow: {
    width: 300,
    height: 60,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "gray",

    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#F2789F",
  },
  heart: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,
    backgroundColor: "#FBD5E1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginEnd: 7,
  },
  Back: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginEnd: 340,
  },
  bag: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,
    backgroundColor: "#FBD5E1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginEnd: 60,
  },
  minus: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,
    backgroundColor: "#FBD5E1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginEnd: 100,
  },
  plus: {
    position: "absolute",
    right: 0,
    top: 10,
    width: 40,
    height: 40,
    zIndex: 10,
    backgroundColor: "#FBD5E1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginEnd: 20,
  },
});
export default ProductDetails;
