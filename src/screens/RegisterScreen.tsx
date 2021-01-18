import React from "react";
import { Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { OnboardingProps } from "../params/OnboardingParamList";

type RegisterScreenProps = {};

export const RegisterScreen = ({
  navigation,
}: OnboardingProps<"RegisterScreen">) => {
  return (
    <CenterSafeView backgroundColor={"#0d7686"}>
      <Text>Register</Text>
    </CenterSafeView>
  );
};
