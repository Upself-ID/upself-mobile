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
import { styles } from "../styles/styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (email, password) => {
    navigation.navigate("MyExperience");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={localStyles.headerContainer}> */}
      <Image
        style={localStyles.logo}
        source={require("../../assets/adaptive-icon.png")}
      />
      {/* </View> */}
      <View style={localStyles.formContainer}>
        <Text style={localStyles.loginText}>Log into your account</Text>
        <TextInput
          style={localStyles.formText}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry={true}
          style={localStyles.formText}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        <Button
          title="Login"
          onPress={loginHandler}
          style={localStyles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: "#00B7EB",
  },
  formContainer: {
    flex: 4,
    backgroundColor: "#fff",
  },
  formText: {
    height: 40,
    borderColor: "#00B7EB",
    color: "#00B7EB",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginText: {
    color: "#00B7EB",
    fontWeight: "bold",
  },
  buttonContainer: {
    fontWeight: "bold",
  },
});
