import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { flex } from "./../Contants";

const CartRow = ({ item }) => {
  const image = "https://i.dummyjson.com/data/products/3/1.jpg";
  return (
    <View style={{ ...flex, ...styles.cartSection }}>
      <View style={{ ...flex }}>
        <View style={{ ...flex }}>
          <View style={{ width: "100%" }}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
          </View>
          <View style={{ marginHorizontal: 8 }}>
            <Text style={{}}>Bananas</Text>
            <Text style={{ color: "gray" }}>$70.45</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartRow;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
  },
  cartSection: {
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});
