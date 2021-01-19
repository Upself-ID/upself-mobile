import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { CustomButton } from "../components/CustomButton";
import { OnboardingProps } from "../params/OnboardingParamList";
import { Color } from "../styles/Colors";

type WelcomeScreenProps = {};

const { primary: primaryColor, white: whiteColor } = Color;

export const WelcomeScreen = ({
  navigation,
}: OnboardingProps<"WelcomeScreen">) => {
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
        <CustomButton
          onPress={onPressLogin}
          backgroundColor={primaryColor}
          borderColor={whiteColor}
        >
          <Text style={styles.buttonLoginText}>Tes {"Log In"}</Text>
        </CustomButton>
        <CustomButton
          onPress={onPressRegister}
          backgroundColor={whiteColor}
          borderColor={primaryColor}
        >
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
