import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const ProductCard = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate("ProductDetails", { item })}
      style={styles.ProductCardContainer}
    >
      <Image source={item.images} style={styles.productImage} />
      <View style={styles.row}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AllProduct = ({ route }) => {
  const { params } = route;
  return (
    <View style={styles.container}>
      <FlatList
        data={params?.products}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  productImage: {
    width: "100%",
    height: 130,
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  ProductCardContainer: {
    marginTop: 15,
  },
  price: {
    fontSize: 18,
    color: "#F999B7",
  },
});
