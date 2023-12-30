import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      {/* <Text style={styles.text}>Welcome To TripQuest</Text> */}
      <TouchableOpacity
        style={styles.filledButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.filledText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outlinedButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.outlineText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212530",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 40,
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  outlineText: {
    color: "#2D9CDB",
    fontSize: 17,
  },
  filledText: {
    color: "white",
    fontSize: 17,
  },
  outlinedButton: {
    display: "flex",
    width: 310,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2D9CDB",
    borderStyle: "solid",
  },
  filledButton: {
    display: "flex",
    width: 310,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
    backgroundColor: "#2D9CDB",
    marginBottom: 50,
  },
});
