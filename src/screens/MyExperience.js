import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, View } from "react-native";

import { styles } from "../styles/styles";

export default function MyExperience({ navigation }) {
  const [experience, setExperience] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={localStyles.container}>
        <Text>Hi, </Text>
        <Text>Welcome to My Experience</Text>
        <TextInput
          multiline
          placeholder="Ceritakan kisahmu..."
          style={localStyles.formExperience}
          onChangeText={(text) => setExperience(text)}
        />
        <Text>Buat ngetes</Text>
        <Text>{experience}</Text>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formExperience: {
    height: 40,
    borderColor: "#00B7EB",
    color: "#00B7EB",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
});
