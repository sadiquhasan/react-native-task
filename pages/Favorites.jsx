import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { box, flex } from "../Contants";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FavoritesCard from "../component/FavoritesCard";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const fav = useSelector((state) => state.favorites.favorite);
  const navigation = useNavigation();
  const renderItem = ({ item }) => <FavoritesCard item={item} />;

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
                Favorites
              </Text>
            </View>
          </View>
          <View style={{ ...box }}>
            <FlatList
              data={fav}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorites;

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
