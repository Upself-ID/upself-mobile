import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LauncherParamList } from "../params/LauncherParamList";

type WelcomeStackProps = {};

const Stack = createStackNavigator<LauncherParamList>();

export const WelcomeStack = ({}: WelcomeStackProps) => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
