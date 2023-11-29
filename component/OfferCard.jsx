import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { flex } from "../Contants";
import { Octicons } from "@expo/vector-icons";

const OfferCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Octicons name="image" size={50} color="#fff" />
      </View>
      <View style={styles.cardContent}>
        <Text style={{ color: "#fff", fontSize: 19 }}>Get</Text>
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
          50% OFF
        </Text>
        <Text style={{ color: "#fff", fontSize: 11 }}>On first 03 order</Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  card: {
    ...flex,
    borderRadius: 15,
    backgroundColor: "#ffbb13",
    width: 240,
    marginRight: 15,
    height: 110,
  },
  cardImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    padding: 20,
  },
  cardContent: {
    width: "60%",
    padding: 15,
  },
});
