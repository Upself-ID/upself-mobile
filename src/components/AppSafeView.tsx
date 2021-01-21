import React, { ReactNode } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalColors } from "../styles/Colors";

type AppViewProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const { whiteColor } = GlobalColors;

export const CenterSafeView = ({ children, backgroundColor }: AppViewProps) => {
  return (
    <SafeAreaView
      style={[
        styles.safeView,
        styles.centerContainer,
        { backgroundColor: backgroundColor },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export const AuthAppView = ({ children }: AppViewProps) => {
  return <SafeAreaView style={styles.authContainer}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    flex: 1,
    backgroundColor: whiteColor,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
