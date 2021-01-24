import React from "react";
import { TextInput } from "react-native";
import { AuthStyles } from "../styles/AuthStyles";

type AppTextInputProps = {
  onChangeText: (text: string) => void;
  // email?: string;
  // password?: string;
};

export const EmailInput = ({ onChangeText }: AppTextInputProps) => {
  return (
    <TextInput
      style={[AuthStyles.formText, { textTransform: "lowercase" }]}
      onChangeText={onChangeText}
      placeholder="Email address"
    />
  );
};

export const PasswordInput = ({ onChangeText }: AppTextInputProps) => {
  return (
    <TextInput
      secureTextEntry={true}
      style={AuthStyles.formText}
      onChangeText={onChangeText}
      placeholder="Password"
    />
  );
};
