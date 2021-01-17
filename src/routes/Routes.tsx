import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { HomeTabs } from "./HomeTabs";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   if (isLoading) {
  //     return (
  //       <CenterView>
  //         <ActivityIndicator size="large" />
  //       </CenterView>
  //     );
  //   }

  return (
    <NavigationContainer>
      {!isLoggedIn ? <WelcomeScreen /> : <HomeTabs />}
    </NavigationContainer>
  );
};
