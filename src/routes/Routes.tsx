import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeTabs } from "./HomeTabs";
import { OnboardingStack } from "./OnboardingStack";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthContext } from "../utilities/context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";

type RoutesProps = {};

export const Routes = ({}: RoutesProps) => {
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    fetch("https://upself.id/token-get")
      .then((response) => response.json())
      .then((data) => {
        AsyncStorage.setItem("token", data, () => {
          console.log(data + "is not stored succesfully!");
        });
      });
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
