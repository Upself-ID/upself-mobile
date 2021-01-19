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
  borderColor: string;
};

export const CustomButton = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
}: CustomButtonProps) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.buttonContainer, { backgroundColor, borderColor }]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor }]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
