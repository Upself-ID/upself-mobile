import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CenterSafeView } from "../components/AppSafeView";
import { AuthButton } from "../components/AppButton";
import { OnboardingProps } from "../config/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";

type WelcomeScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const WelcomeScreen = ({
  navigation,
}: OnboardingProps<"WelcomeScreen">) => {
  const onPressLogin = () => navigation.navigate("LoginScreen");
  const onPressRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <CenterSafeView backgroundColor={whiteColor}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <Text style={styles.welcomeText}>Welcome to Upself</Text>
      <View style={styles.buttonContainer}>
        <AuthButton
          onPress={onPressLogin}
          backgroundColor={primaryColor}
          borderColor={primaryColor}
          rippleColor={whiteColor}
        >
          <Text style={[styles.buttonText, { color: whiteColor }]}>Log In</Text>
        </AuthButton>
        <AuthButton
          onPress={onPressRegister}
          backgroundColor={whiteColor}
          borderColor={primaryColor}
          rippleColor={primaryColor}
        >
          <Text style={[styles.buttonText, { color: primaryColor }]}>
            Register
          </Text>
        </AuthButton>
      </View>
    </CenterSafeView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  buttonText: {
    fontWeight: "bold",
    marginHorizontal: 32,
    textAlign: "center",
  },
  welcomeText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    margin: 32,
  },
});
