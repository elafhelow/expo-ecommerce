import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CategoryCom = (props) => {
  const { item } = props;
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("ALlProduct", {
      cat_name: item.name,
      products: item.products,
    });
  };

  return (
    <TouchableOpacity style={styles.cont} onPress={onClick}>
      <View>
        <Image style={styles.img} source={item.images} />
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
      <TouchableOpacity activeOpacity={0.8} style={styles.heart}>
        <Ionicons color={"black"} name={"heart-outline"} size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default CategoryCom;

const styles = StyleSheet.create({
  cont: {
    marginTop: 20,
    width: 170,
    marginStart: 20,
  },
  img: {
    width: "100%",
    height: 170,
    shadowColor: "gray",
    borderWidth: 0,
    borderColor: "gray",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  box: {
    height: 85,
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0,
    borderColor: "gray",
    elevation: 20,
    shadowColor: "gray",
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
    marginEnd: 7,
  },
});
