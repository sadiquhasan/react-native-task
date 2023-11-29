import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { flex } from "./../Contants";
import { Entypo } from "@expo/vector-icons";
import { addProduct, removeProduct } from "../slice/cart";
import { useDispatch, useSelector } from "react-redux";

const CartRow = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(addProduct(item));
  const decreaseCount = () => dispatch(removeProduct(item));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseCount}>
          <Entypo name="circle-with-minus" size={18} color="gray" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={increaseCount}>
          <Entypo name="circle-with-plus" size={18} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "#007BFF",
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 10,
  },
});
