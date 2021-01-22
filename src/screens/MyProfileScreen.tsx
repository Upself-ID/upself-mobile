import React from "react";
import { Text, View } from "react-native";
import { AuthAppView } from "../components/AppSafeView";

type MyProfileScreenProps = {};

export const MyProfileScreen = ({}: MyProfileScreenProps) => {
  return (
    <AuthAppView>
      <View>
        <Text>My Profile coming soon...</Text>
      </View>
    </AuthAppView>
  );
};
