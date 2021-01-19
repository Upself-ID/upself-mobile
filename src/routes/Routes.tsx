import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { HomeTabs } from "./HomeTabs";
import { OnboardingStack } from "./OnboardingStack";
import { SplashScreen } from "../screens/SplashScreen";

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
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {!isLoggedIn ? <OnboardingStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};
