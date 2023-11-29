import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { box, flex } from "../Contants";
import OfferCard from "../component/OfferCard";
import { SimpleLineIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductCard from "../component/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import API from "../Endpoint";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const cartItem = useSelector((state) => state.cart.cart.length);

  useEffect(() => {
    const product = async () => {
      try {
        const response = await API.get("/products");
        setProduct(response.data.products);
      } catch (error) {
        console.log(error.message || "An error occurred");
      }
    };
    product();
  }, []);

  const renderItem = ({ item }) => <ProductCard item={item} />;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.Header}>
        <View style={styles.UserHeader}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Hey, Rahul</Text>
          <View style={styles.cartButton}>
            <Text style={styles.cartCount}>{cartItem}</Text>
            <SimpleLineIcons
              onPress={() => navigation.navigate("cart")}
              name="handbag"
              size={20}
              color="#fff"
            />
          </View>
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="md-search-sharp" size={20} color="#fff" />
          <TextInput
            style={styles.searchField}
            placeholder="Seach Product or store"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.dropdownSection}>
          <View>
            <Text style={{ color: "lightgray", fontSize: "x-small" }}>
              DELIVERY TO
            </Text>
            <Text style={{ color: "#fff", fontSize: "small" }}>
              Green Way 3000, Sylhet{" "}
              <MaterialIcons
                name="keyboard-arrow-down"
                size={10}
                color="#fff"
              />
            </Text>
          </View>
          <View>
            <Text style={{ color: "lightgray", fontSize: "x-small" }}>
              WITHIN
            </Text>
            <Text style={{ color: "#fff", fontSize: "small" }}>
              1 Hour{" "}
              <MaterialIcons
                name="keyboard-arrow-down"
                size={10}
                color="#fff"
              />
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.DashboardSection}
      >
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </ScrollView>

      <View style={styles.recommended}>
        <Text style={{ fontSize: 26, color: "#000", fontWeight: "350" }}>
          Recommended
        </Text>
        <View>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.products}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  DashboardSection: {
    padding: box.padding,
  },
  recommended: {
    padding: box.padding,
  },
  Header: {
    padding: box.padding,
    backgroundColor: "blue",
  },
  UserHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  cartButton: {
    position: "relative",
  },
  cartCount: {
    position: "absolute",
    right: -6,
    top: -3,
    zIndex: 1,
    fontSize: 10,
    backgroundColor: "#ffbb13",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 50,
    color: "#fff",
    borderWidth: 2,
    borderColor: "blue",
  },
  searchBar: {
    ...flex,
    marginTop: 30,
    backgroundColor: "darkblue",
    paddingVertical: box.padding + 4,
    paddingHorizontal: box.padding + 10,
    borderRadius: 50,
  },
  searchField: {
    flex: 1,
    paddingHorizontal: 15,
    color: "darkgray",
    borderWidth: 0,
    borderColor: "transparent",
    borderBottomWidth: 0,
  },
  dropdownSection: {
    ...flex,
    marginTop: 20,
    color: "#fff",
  },
});
