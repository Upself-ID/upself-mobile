import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { ReactNode } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CenterSafeViewProps = {
  children: ReactNode;
  backgroundColor: string;
};

export const CenterSafeView = ({
  children,
  backgroundColor,
}: CenterSafeViewProps) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
