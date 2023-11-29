import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./pages/Dashboard";
import More from "./pages/More";
import { Entypo } from "@expo/vector-icons";
import Category from "./pages/Category";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Favorites from "./pages/Favorites";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={"#006E97"} />
            ) : (
              <AntDesign name="home" size={24} color={"#000"} />
            ),
        }}
        name="Home"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Categories",
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="category" size={24} color={"#006E97"} />
            ) : (
              <MaterialIcons name="category" size={24} color="black" />
            ),
        }}
        name="category"
        component={Category}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Favorites",
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart" size={24} color={"#006E97"} />
            ) : (
              <Ionicons name="heart-outline" size={24} color="black" />
            ),
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "More",
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="more-v" size={24} color="#006E97" />
            ) : (
              <Fontisto name="more-v" size={24} color="black" />
            ),
        }}
        name="more"
        component={More}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
