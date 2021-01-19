import React, { ReactNode, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Colors } from "../styles/Colors";

type CustomButtonProps = {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: string;
  borderColor: string;
};

const { primaryColor } = Colors;

export const CustomButton = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
}: CustomButtonProps) => {
  const [rippleColor, setRippleColor] = useState(primaryColor);
  const [rippleOverflow, setRippleOverflow] = useState(true);

  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
    >
      <View style={[styles.buttonContainer, { borderColor }]}>{children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor, borderColor }]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
});
