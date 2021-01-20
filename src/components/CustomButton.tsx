import React, { ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

type CustomButtonProps = {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: string;
  borderColor: string;
  rippleColor: string;
};

export const CustomButton = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
  rippleColor,
}: CustomButtonProps) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(rippleColor, false, 48)}
    >
      <View style={[styles.buttonContainer, { backgroundColor, borderColor }]}>
        {children}
      </View>
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
    borderWidth: 2,
    borderRadius: 16,
  },
});
