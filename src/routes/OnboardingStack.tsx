import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { OnboardingParamList } from "../params/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";

type OnboardingStackProps = {};

const Stack = createStackNavigator<OnboardingParamList>();

const { primaryColor, whiteColor } = GlobalColors;

export const OnboardingStack = ({}: OnboardingStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: whiteColor,
          // This removes shadow header on iOS
          shadowOpacity: 0,
          // This removes shadow header on Android
          elevation: 0,
        },
        headerTintColor: primaryColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register",
        }}
      />
    </Stack.Navigator>
  );
};
