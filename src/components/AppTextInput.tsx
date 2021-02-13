import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AuthStyles } from "../styles/AuthStyles";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

type AppTextInputProps = {
  onChangeText: (text: string) => void;
  // email?: string;
  // password?: string;
};

export const EmailInput = ({ onChangeText }: AppTextInputProps) => {
  return (
    // <View style={styles.textInputContainer}>
    //   <FontAwesomeIcon icon={faEnvelope} color="#92c5e6" size={20} />
    <TextInput
      style={[AuthStyles.formText, { textTransform: "lowercase" }]}
      onChangeText={onChangeText}
      placeholder="Email address"
      placeholderTextColor="#92c5e6"
    />
  );
};

export const PasswordInput = ({ onChangeText }: AppTextInputProps) => {
  return (
    // <View style={styles.textInputContainer}>
    //   <FontAwesomeIcon icon={faLock} color="#92c5e6" size={20} />
    <TextInput
      secureTextEntry={true}
      style={AuthStyles.formText}
      onChangeText={onChangeText}
      placeholder="Password"
      placeholderTextColor="#92c5e6"
    />
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 8,
  },
});
