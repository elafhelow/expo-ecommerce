import React from "react";
 import { StyleSheet , Text, TouchableOpacity } from "react-native";
 import { useNavigation } from '@react-navigation/native' 


 const CategoryCom = (props) =>{
     const {item} = props
     const navigation= useNavigation()
     const onClick = () =>{
             navigation.navigate('AllProduct',{
                 cat_name:item.name,
             products:item.products
               })
       }
     return(
        <View style={styles.cont} onPress={onClick}>
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
     )
}