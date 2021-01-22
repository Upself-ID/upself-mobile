import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeTabs } from "./HomeTabs";
import { OnboardingStack } from "./OnboardingStack";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthContext } from "../services/AuthContext";

type RoutesProps = {};

export const Routes = ({}: RoutesProps) => {
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

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
      {!user ? <OnboardingStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};
