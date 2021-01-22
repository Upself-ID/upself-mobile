import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { OnboardingParamList } from "../config/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";
import { SplashScreen } from "../screens/SplashScreen";

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
          // shadowOpacity removes shadow header on iOS
          shadowOpacity: 0,
          // elevation removes shadow header on Android
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
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          title: "Splash Screen",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
