import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, View } from "react-native";

import { globalStyles } from "../styles/styles";

export default function MyExperience({ navigation }) {
  const [experience, setExperience] = useState("");
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.container}>
        <Text>Hi, </Text>
        <Text>Welcome to My Experience</Text>
        <TextInput
          multiline
          placeholder="Ceritakan kisahmu..."
          style={styles.formExperience}
          onChangeText={(text) => setExperience(text)}
        />
        <Text>Buat ngetes</Text>
        <Text>{experience}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formExperience: {
    height: 40,
    borderColor: "#0d7686",
    color: "#0d7686",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
});
