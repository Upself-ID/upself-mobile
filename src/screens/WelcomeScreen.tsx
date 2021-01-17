import React from "react";
import { Alert, Image, Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { CustomButton } from "../components/CustomButton";

type WelcomeScreenProps = {};

export const WelcomeScreen = ({}: WelcomeScreenProps) => {
  const onPress = () => Alert.alert("wor");
  return (
    <CenterSafeView backgroundColor={"#fff"}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <Text style={styles.welcomeText}>Welcome to Upself</Text>
      <CustomButton onPress={onPress} backgroundColor="#0d7686">
        <Text style={styles.buttonLoginText}>Tes {"Log In"}</Text>
      </CustomButton>
      <CustomButton onPress={onPress} backgroundColor="#fff">
        <Text style={styles.buttonRegisterText}>Tes {"Register"}</Text>
      </CustomButton>
    </CenterSafeView>
  );
};

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  buttonLoginText: {
    color: "#fff",
  },
  buttonRegisterText: {
    color: "#0d7686",
  },
  welcomeText: {
    color: "#0d7686",
    fontWeight: "bold",
    padding: 50,
  },
});
