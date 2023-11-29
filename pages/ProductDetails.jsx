import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { box } from "../Contants";
import { SimpleLineIcons, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import API from "../Endpoint";
import ImageSlider from "../component/ImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slice/cart";

const ProductDetails = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart.length);

  useEffect(() => {
    FetchProduct();
  }, []);

  const FetchProduct = async () => {
    try {
      const response = await API.get(`/products/${item.id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error.message || "An error occurred");
    }
  };

  const getrating = (rating) => {
    let calcu = ((rating * 10) / 5).toFixed() * 5;
    let result = [];
    [1, 1, 1, 1, 1].map((res) => {
      if (calcu == 0) result.push(0);
      else if (calcu == 5) {
        result.push(1);
        calcu -= 5;
      } else if (calcu >= 10) {
        result.push(2);
        calcu -= 10;
      }
    });

    return result;
  };

  const discountPrice = (value, off) => {
    var res = ((value * off) / 100).toFixed(2);
    return res;
  };

  const navigateToCart = () => {
    navigation.navigate("cart");
  };

  const addToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
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
          <View style={styles.cartButton}>
            <Text style={styles.cartCount}>{cartItem}</Text>
            <SimpleLineIcons
              onPress={() => navigation.navigate("cart")}
              name="handbag"
              size={20}
              color="#000"
            />
          </View>
        </View>
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.Headline}>Thin Choise</Text>
        <Text style={styles.name}>{product.title}</Text>
        <View style={styles.rating}>
          {getrating(product.rating).map((res) =>
            res === 0 ? (
              <FontAwesome name="star-o" size={18} color="yellow" />
            ) : res === 1 ? (
              <FontAwesome name="star-half-empty" size={18} color="yellow" />
            ) : (
              <FontAwesome name="star" size={18} color="yellow" />
            )
          )}
          <Text style={{ marginLeft: 15, color: "gray" }}>110 Reviews</Text>
        </View>
      </View>

      <View style={styles.container}>
        <ImageSlider images={product.images} />
      </View>
      <View
        style={{
          ...box,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17, color: "blue", fontWeight: "700" }}>
          ${product.price}
        </Text>
        <Text style={styles.discountBox}>
          ${discountPrice(product.price, product.discountPercentage)} OFF
        </Text>
      </View>
      <View
        style={{
          ...box,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={addToCart} style={{ ...styles.button }}>
          <Text style={{ ...styles.buttonText, color: "blue" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToCart}
          style={{ ...styles.button, backgroundColor: "blue" }}
        >
          <Text style={{ ...styles.buttonText, color: "#fff" }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...box,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 17 }}>Details</Text>
        <Text style={{ fontSize: 13, color: "gray", marginTop: 10 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          vel architecto eaque explicabo, porro reprehenderit harum nesciunt
          sed! Ex, dolorum.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 13,
    width: 140,
    borderWidth: 1,
    borderColor: "blue",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
  Header: {
    padding: box.padding,
    backgroundColor: "#fff",
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
  arrowButton: {
    backgroundColor: "#bababa",
    padding: 6,
    borderRadius: 50,
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
    borderColor: "#fff",
  },
  Headline: {
    fontSize: 42,
    fontWeight: "200",
  },
  titleBar: {
    padding: box.padding,
  },
  name: {
    fontSize: 41,
    fontWeight: "600",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  discountBox: {
    fontSize: 12,
    marginLeft: 10,
    backgroundColor: "blue",
    borderRadius: 50,
    color: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
