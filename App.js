import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Welcome from "./Components/Welcome";

const Stack = createNativeStackNavigator();
export default function App() {
  const headerStyle = {
    title: "",
    headerStyle: {
      backgroundColor: "#212530", //Set Header color
    },
    headerTintColor: "#fff", //Set Header text color
    headerTitleStyle: {
      fontWeight: "bold", //Set Header text style
    },
  };
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={headerStyle}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen options={headerStyle} name="Login" component={Login} />
        <Stack.Screen options={headerStyle} name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
