import React, { ReactNode } from "react";
import { Text } from "react-native";

type AppTextProps = {
  children: ReactNode;
};

export const AppText = ({ children }: AppTextProps) => {
  return <Text>{children}</Text>;
};
