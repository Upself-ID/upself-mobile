import React, { ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

type AppButtonProps = {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: string;
  borderColor: string;
  rippleColor: string;
};

export const AuthButton = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
  rippleColor,
}: AppButtonProps) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(rippleColor, false)}
      useForeground={true}
    >
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor, borderColor, overflow: "hidden" },
        ]}
      >
        {children}
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor, borderColor }]}
      activeOpacity={1}
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
