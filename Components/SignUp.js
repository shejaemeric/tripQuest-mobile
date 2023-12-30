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

function SignUp() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Enter Your Name</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Enter Your Email</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Enter Your Password</Text>
          <TextInput type="password" style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Confirm Your Password</Text>
          <TextInput type="password" style={styles.input}></TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={styles.filledButton}
        onPress={() => alert("Hello World!")}
      >
        <Text style={styles.filledText}>Login</Text>
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
  filledText: {
    color: "white",
    fontSize: 17,
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
  input: {
    height: 48,
    padding: 16,
    backgroundColor: "white",
    width: 340,
    borderRadius: 16,
  },
  formContainer: { gap: 20, marginBottom: 40 },
  inputContainer: { gap: 8 },
  text: { color: "white", fontSize: 16 },
});

export default SignUp;
