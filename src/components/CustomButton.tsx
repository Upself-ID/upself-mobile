import React, { ReactNode } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

type CustomButtonProps = {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: string;
};

export const CustomButton = ({
  children,
  onPress,
  backgroundColor,
}: CustomButtonProps) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}
      >
        {children}
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#0d7686",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
