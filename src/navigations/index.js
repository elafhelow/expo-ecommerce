import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home.js";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import CategoryCom from "../components/CategoryCom";
import ALlProduct from "../screens/AllProduct.js";
import ProductDetails from "../screens/ProductDetails";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const AppStack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="CategoryCom" component={CategoryCom} />
      <AppStack.Screen name="ALlProduct" component={ALlProduct} />
      <AppStack.Screen name="ProductDetails" component={ProductDetails} />
    </AppStack.Navigator>
  );
};

const BottomTabScreen = () => {
  return (
    <BottomTabs.Navigator initialRouteName="HomeStack">
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 20, padding: 20 },
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#F2789F",
          tabBarInActiveTintColor: "gray",
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 20, padding: 20 },
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "#F2789F",
          tabBarInActiveTintColor: "black",
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Signup" component={Signup} />
        <AppStack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
