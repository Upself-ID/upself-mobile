import React from "react";
import { Text, View } from "react-native";
import { AuthAppView } from "../components/AppSafeView";

type MyHomeScreenProps = {};

export const MyHomeScreen = ({}: MyHomeScreenProps) => {
  return (
    <AuthAppView>
      <View>
        <Text>My Home coming soon...</Text>
      </View>
    </AuthAppView>
  );
};
