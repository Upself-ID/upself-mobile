import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import { globalStyles } from "../styles/styles";
import SignButton from "../shared/button";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (email, password) => {
    navigation.navigate("MyExperience");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome to Upself</Text>
        <TextInput
          style={styles.formText}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email address"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.formText}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        <View>
          <Button title="Login" onPress={loginHandler} color="#0d7686" />
          {/* <Button title="Register" onPress={loginHandler} color="#000" />  */}
        </View>
        {/* <SignButton text="Login" onPress={loginHandler} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 4,
    backgroundColor: "#fff",
  },
  formText: {
    height: 40,
    borderColor: "#0d7686",
    color: "#0d7686",
    borderBottomWidth: 2,
    padding: 8,
    margin: 10,
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  welcomeText: {
    color: "#0d7686",
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
});
