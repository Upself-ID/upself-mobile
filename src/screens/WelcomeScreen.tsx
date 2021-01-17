import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { CustomButton } from "../components/CustomButton";
import { createStackNavigator } from "@react-navigation/stack";
import { LauncherProps } from "../params/LauncherParamList";

type WelcomeScreenProps = {};

const Stack = createStackNavigator();

export const WelcomeScreen = ({
  navigation,
}: LauncherProps<"WelcomeScreen">) => {
  const onPressLogin = () => navigation.navigate("LoginScreen");
  const onPressRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <CenterSafeView backgroundColor={"#fff"}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <Text style={styles.welcomeText}>Welcome to Upself</Text>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={onPressLogin} backgroundColor="#0d7686">
          <Text style={styles.buttonLoginText}>Tes {"Log In"}</Text>
        </CustomButton>
        <CustomButton onPress={onPressRegister} backgroundColor="#fff">
          <Text style={styles.buttonRegisterText}>Tes {"Register"}</Text>
        </CustomButton>
      </View>
    </CenterSafeView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  buttonLoginText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonRegisterText: {
    color: "#0d7686",
    textAlign: "center",
  },
  welcomeText: {
    color: "#0d7686",
    fontWeight: "bold",
    padding: 50,
  },
});
