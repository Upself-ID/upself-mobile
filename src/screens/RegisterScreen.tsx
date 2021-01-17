import React from "react";
import { Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { LauncherProps } from "../params/LauncherParamList";

type RegisterScreenProps = {};

export const RegisterScreen = ({
  route,
  navigation,
}: LauncherProps<"RegisterScreen">) => {
  return (
    <CenterSafeView backgroundColor={"#0d7686"}>
      <Text>Register</Text>
    </CenterSafeView>
  );
};
