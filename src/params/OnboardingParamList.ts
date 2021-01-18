import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type OnboardingParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type OnboardingProps<T extends keyof OnboardingParamList> = {
  route: RouteProp<OnboardingParamList, T>;
  navigation: StackNavigationProp<OnboardingParamList, T>;
};
