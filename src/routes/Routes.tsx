import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { HomeTabs } from "./HomeTabs";
import { WelcomeStack } from "./WelcomeStack";

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
      {!isLoggedIn ? <WelcomeStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};
