import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { CustomButton } from "../components/CustomButton";
import { OnboardingProps } from "../params/OnboardingParamList";
import { Colors } from "../styles/Colors";

type WelcomeScreenProps = {};

const { primaryColor, whiteColor } = Colors;

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
          <Text style={[styles.buttonText, { color: whiteColor }]}>Log In</Text>
        </CustomButton>
        <CustomButton
          onPress={onPressRegister}
          backgroundColor={whiteColor}
          borderColor={primaryColor}
        >
          <Text style={[styles.buttonText, { color: primaryColor }]}>
            Register
          </Text>
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
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
  },
  welcomeText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    padding: 48,
  },
});
