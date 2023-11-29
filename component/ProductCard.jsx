import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { box, flex } from "../Contants";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../slice/favorites";

const ProductCard = ({ item }) => {
  const fav = useSelector((state) => state.favorites.favorite);
  const navigation = useNavigation();
  const [heart, setHeart] = useState(fav?.some((res) => res.id === item.id));
  const dispatch = useDispatch();
  const navigateToDetials = () => {
    navigation.navigate("productDetails", { item });
  };

  useEffect(() => {
    setHeart(fav?.some((res) => res.id === item.id));
    console.log(fav);
  }, [fav]);

  const handleLike = () => {
    if (!heart) {
      dispatch(addFavorite(item));
    } else {
      dispatch(removeFavorite(item));
    }
  };

  const addToCart = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <View style={styles.card}>
      <AntDesign
        style={styles.heart}
        name={heart ? "heart" : "hearto"}
        size={15}
        color={heart ? "red" : "gray"}
        onPress={handleLike}
      />
      <TouchableHighlight
        onPress={navigateToDetials}
        activeOpacity={0.6}
        underlayColor="#f1f1f1"
      >
        <View>
          <Image source={{ uri: item.images[0] }} style={styles.image} />
          <View style={styles.details}>
            <View style={{ width: "85%", paddingRight: 5 }}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={{ width: "15%" }}>
              <AntDesign
                onPres={addToCart}
                name="pluscircle"
                size={18}
                color="blue"
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 4,
    backgroundColor: "#fff",
    width: "48%",
    padding: 10,
    marginHorizontal: "auto",
  },
  heart: {
    position: "absolute",
    zIndex: 5,
    top: 5,
    left: 5,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    ...flex,
  },
  title: {
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 8,
    color: "gray",
  },
  price: {
    fontSize: 13,
    color: "#010101",
    fontWeight: "600",
  },
});
