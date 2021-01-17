import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { HomeTabs } from "./HomeTabs";
import { WelcomeStack } from "./WelcomeStack";

type RoutesProps = {};

export const Routes = ({}: RoutesProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <CenterSafeView backgroundColor={"#fff"}>
        <ActivityIndicator size="large" />
      </CenterSafeView>
    );
  }

  return (
    <NavigationContainer>
      {!isLoggedIn ? <WelcomeStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};
