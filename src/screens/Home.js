import React, { Component ,useState} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground,Image,FlatList,StatusBar} from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CategoryCom from "../components/CategoryCom.js";
import { MaterialIcons } from '@expo/vector-icons'; 



 const Home =()=> {

    const DATA =[
    {images :require("../assets/foundationImag.jpg"), name : "Brand", orders:"2000 order",price:"30$"},
    {images :require("../assets/PaletteTopface.jpg"), name : "Lipstic", orders:"500 order", price:"40$"},
    {images :require("../assets/macRoug.jpg"), name : "concealer", orders:"888 order", price:"340$"},
    {images :require("../assets/homePhoto.jpg"), name : "eyeliner", orders:"290 order", price:"10$"},
    {images :require("../assets/homePhoto.jpg"), name : "plasher", orders:"201 order", price:"35$"},
    {images :require("../assets/homePhoto.jpg"), name : "Item1", orders:"300 order", price:"20$"},
   
  ];
  
 /* const AllCategory =[
    {images :require("../assets/foundationImag.jpg"), name : "Concelare", orders:"2000 order",price:"30$"},
    {images :require("../assets/PaletteTopface.jpg"), name : "Lipstic", orders:"500 order", price:"40$"},
    {images :require("../assets/macRoug.jpg"), name : "concealer", orders:"888 order", price:"340$"},
 
  ];*/
  const [categoriesProduct,setcategories] =useState([
          {name :'Foundation' ,price :'200$',orders:"2000 order",images :require("../assets/foundationImag.jpg"),
             products:[
                 {nameP:'Mac Fouunfation',
                 images :require("../assets/foundationImag.jpg"),price:"30$"},
                {nameP:'TopFace Fondation',images :require("../assets/foundationImag.jpg"),price:"30$"
              }
           ]},
             {name :'Lipstic' ,price :'100$',orders:"2000 order",images :require("../assets/macRoug.jpg"),
          products:[
              {nameP:'Mac Lipstic',images :require("../assets/macRoug.jpg"),price :'100$'},
               {nameP:'Note Lipstic',images :require("../assets/macRoug.jpg"),price :'100$'}
             ]
       },
       {name :'EyeShadow' ,price :'100$',orders:"2000 order",images :require("../assets/macRoug.jpg"),
       products:[
           {nameP:'Mac Lipstic',images :require("../assets/PaletteTopface.jpg"),price :'100$'},
            {nameP:'Note Lipstic',images :require("../assets/PaletteTopface.jpg"),price :'100$'}
          ]
    },
        ]) 

     return (
   
     <View style={styles.cantainer}>
       <StatusBar
        animated={true}
         backgroundColor='red'
         barStyle="default"
         showHideTransition="fade" hidden={false} />
           
    
       <Image style= {styles.homeImg}  source={require("../assets/homeee.jpg")}/>
       <TouchableOpacity
          activeOpacity={0.8}
          style={styles.menuhorz}
        >
       <Feather name="more-horizontal" size={70} color="gray" /></TouchableOpacity>
 
       <Text style={ {
    color: 'black',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }} >Newest product</Text>
      
      <FlatList data={DATA} 
horizontal
   keyExtractor={(item)=> item.id} 
      renderItem={({item}) => <View style={styles.cont}>
        <View>
        <Image
          style={styles.img}
          
          source={item.images
          }
        />
        </View>

        <View style={styles.box}>
         <View style={styles.row}>
         <Text style={styles.title}>{item.name}</Text>
          <Feather name="shopping-bag" size={24} color="black" />
         </View>
          <View style={styles.row}>
            <Text style={styles.size}>{item.orders}</Text>
            <Text style={styles.price}>{item.price}</Text>         
             </View>
          
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.heart}
        >
          <Ionicons
            color={"black"}
            name={"heart-outline"}
            size={20}
          />
        </TouchableOpacity>

      </View>

     }
      />
  
 
 <View style={styles.row}>
 <Text style={ {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }} >Category products</Text>
   <TouchableOpacity
          activeOpacity={0.8}
          style={styles.arrow}
        >
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          
        </TouchableOpacity>
 </View>
      
   <FlatList data={categoriesProduct} 
   numColumns="2"
   keyExtractor={(item)=> item.id} 
      r renderItem={({item})=><CategoryCom item={item}/>}/>
 </View>

    ) 
   
  }

  export default Home

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#FFFF',
  },
  homeImg :{
  width:"100%",
  height: 250,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  
},
opacityImgHomer :{
  width:"100%",
  height: 300,
  backgroundColor:'black',
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10
},

text: {
  fontSize: 40,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 40,
},
 cont: {
  marginTop:20,
  width: 170,
  marginStart:20
  
},
box: {
  height: 85,
  backgroundColor: "white",
  justifyContent: "space-between",
  padding: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderWidth:0,
  borderColor:'gray',
  elevation: 20,
  shadowColor: "gray",
  // shadowOpacity: 0.7,
  // shadowOffset: {
  //   height: 0,
  //   width: 0,
  // },
},
img: {
  width: "100%",
  height: 170,
  shadowColor: "gray",
  borderWidth:0,
  borderColor:'gray',
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10
},
row: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},
title: {
  fontWeight: "bold",
  fontSize: 20,
},
size: {
  color: "grey",
  fontSize: 18,
},
rate: {
  fontSize: 18,
  color: "orange",
},
price: {
  fontSize: 18,
  color: "#F999B7",
  
},
heart: {
  position: "absolute",
  right: 0,
  top: 10,
  width: 30,
  height: 30,
  zIndex: 10,
  backgroundColor: "#FBD5E1",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  marginEnd:7
},
arrow:{
  position: "absolute",
  right: 0,
  top: 10,
  width: 30,
  height: 30,
  zIndex: 10,
  marginTop: 12,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  marginEnd:7
},
menuhorz:{
  position: "absolute",
 
  width: 70,
  height: 70,
 
  marginTop: 250,
  marginLeft:163,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
 
},
itemContainer:{
  backgroundColor:"orange",
  margin:8,
  width:'100%',
  height:100,
  justifyContent:"center",
  alignItems:"center"

  },
  textItemcontainer:{
   fontSize:32,
   fontWeight:"bold",
 
  },
  
});



/*<View style={styles.cont}>
        <View>
        <Image
          style={styles.img}
          
          source={item.images
          }
        />
        </View>

        <View style={styles.box}>
         <View style={styles.row}>
         <Text style={styles.title}>{item.name}</Text>
          <Feather name="shopping-bag" size={24} color="black" />
         </View>
          <View style={styles.row}>
            <Text style={styles.size}>{item.orders}</Text>
            <Text style={styles.price}>{item.price}</Text>         
             </View>
          
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.heart}
        >
          <Ionicons
            color={"black"}
            name={"heart-outline"}
            size={20}
          />
        </TouchableOpacity>

      </View>
*/