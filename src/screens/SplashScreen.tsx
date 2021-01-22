import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { CenterSafeView } from "../components/AppSafeView";
import { OnboardingProps } from "../config/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";

type SplashScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const SplashScreen = ({}: OnboardingProps<"SplashScreen">) => {
  return (
    <CenterSafeView backgroundColor={whiteColor}>
      <ActivityIndicator size="large" color={primaryColor} />
      <Text style={styles.loadingText}>Upself</Text>
    </CenterSafeView>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    color: primaryColor,
    fontWeight: "bold",
    marginVertical: 32,
  },
});
