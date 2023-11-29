import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { box, flex } from "../Contants";
import { Fontisto } from "@expo/vector-icons";
import CartRow from "../component/CartRow";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const renderItem = ({ item }) => <CartRow item={item} />;
  const cartItem = useSelector((state) => state.cart.cart.length);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View>
          <View style={styles.Header}>
            <View style={styles.UserHeader}>
              <View style={styles.arrowButton}>
                <Fontisto
                  name="angle-left"
                  onPress={() => navigation.goBack()}
                  size={10}
                  color="#fff"
                />
              </View>
              <Text style={{ marginLeft: 20, fontSize: "large" }}>
                Shopping Cart ({cartItem})
              </Text>
            </View>
          </View>
          <View style={{ ...box }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <View style={styles.priceDetails}>
          <Text style={{ width: "50%", marginBottom: 14, color: "gray" }}>
            Subtotal
          </Text>
          <Text
            style={{
              width: "50%",
              marginBottom: 14,
              textAlign: "right",
              fontWeight: "600",
            }}
          >
            $35.45
          </Text>
          <Text style={{ width: "50%", marginBottom: 14, color: "gray" }}>
            Delivery
          </Text>
          <Text
            style={{
              width: "50%",
              marginBottom: 14,
              textAlign: "right",
              fontWeight: "600",
            }}
          >
            $2.00
          </Text>
          <Text style={{ width: "50%", marginBottom: 14, color: "gray" }}>
            Total
          </Text>
          <Text
            style={{
              width: "50%",
              marginBottom: 14,
              textAlign: "right",
              fontWeight: "600",
            }}
          >
            $37.98
          </Text>

          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "blue" }}
          >
            <Text style={{ ...styles.buttonText, color: "#fff" }}>
              Proceed To Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartFlex: { display: "flex", justifyContent: "space-between" },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 13,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "blue",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
  priceDetails: {
    ...flex,
    padding: 20,
    borderRadius: 20,
    flexWrap: "wrap",
    flex: 1,
    backgroundColor: "rgba(127,127,127,0.1)",
  },

  Header: {
    padding: box.padding,
    backgroundColor: "#fff",
  },
  UserHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginTop: 30,
  },
  arrowButton: {
    backgroundColor: "#bababa",
    padding: 6,
    borderRadius: 50,
  },
});
