import React from "react";
import { Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { OnboardingProps } from "../params/OnboardingParamList";
import { Colors } from "../styles/Colors";

type RegisterScreenProps = {};

const { whiteColor } = Colors;

export const RegisterScreen = ({
  navigation,
}: OnboardingProps<"RegisterScreen">) => {
  return (
    <CenterSafeView backgroundColor={whiteColor}>
      <Text>Register</Text>
    </CenterSafeView>
  );
};
