import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { HomeTabs } from "./HomeTabs";
import { OnboardingStack } from "./OnboardingStack";

type RoutesProps = {};

export const Routes = ({}: RoutesProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <CenterSafeView backgroundColor={"#fff"}>
        <ActivityIndicator size="large" color="#0d7686" />
        <Text style={styles.loadingText}>Upself</Text>
      </CenterSafeView>
    );
  }

  return (
    <NavigationContainer>
      {!isLoggedIn ? <OnboardingStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    color: "#0d7686",
    fontWeight: "bold",
  },
});
