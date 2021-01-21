import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { AuthStyles } from "../styles/AuthStyles";

type AppTextInputProps = {
  onChangeText: (text: string) => void;
  email?: string;
  password?: string;
};

export const EmailInput = ({ onChangeText, email }: AppTextInputProps) => {
  return (
    <TextInput
      style={[AuthStyles.formText, { textTransform: "lowercase" }]}
      onChangeText={onChangeText}
      value={email}
      placeholder="Email address"
      keyboardType="email-address"
    />
  );
};

export const PasswordInput = ({
  onChangeText,
  password,
}: AppTextInputProps) => {
  return (
    <TextInput
      secureTextEntry={true}
      style={AuthStyles.formText}
      onChangeText={onChangeText}
      value={password}
      placeholder="Password"
    />
  );
};
