import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function SignButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View styles={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: "#0d7686",
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
