import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import BottomNav from "./BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./slice/reducer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="bottomNav">
            <Stack.Screen
              name="bottomNav"
              options={{ headerShown: false }}
              component={BottomNav}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="productDetails"
              component={ProductDetails}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="cart"
              component={Cart}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
