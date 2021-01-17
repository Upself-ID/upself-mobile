import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type LauncherParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type LauncherProps<T extends keyof LauncherParamList> = {
  route: RouteProp<LauncherParamList, T>;
  navigation: StackNavigationProp<LauncherParamList, T>;
};
