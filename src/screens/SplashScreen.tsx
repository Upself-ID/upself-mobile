import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { GlobalColors } from "../styles/Colors";

type SplashScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const SplashScreen = ({}: SplashScreenProps) => {
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
