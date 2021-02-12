import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthStyles } from "../styles/AuthStyles";
import { GlobalColors } from "../styles/Colors";

type MyExperienceScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const MyExperienceScreen = ({}: MyExperienceScreenProps) => {
  const [expTitle, setExpTitle] = useState("");
  const [expBody, setExpBody] = useState("");
  const [exp, setExp] = useState([
    { title: "First Post", body: "Hello World" },
  ]);

  const onPressPost = () => {
    setExp([...exp, { title: expTitle, body: expBody }]);
  };

  return (
    <AuthAppView>
      <View style={styles.screenContainer}>
        {/* Title and Body Form */}
        <TextInput
          multiline
          style={styles.titleInputText}
          placeholder="Title"
          onChangeText={(text) => setExpTitle(text)}
        />
        <TextInput
          multiline
          style={styles.bodyInputText}
          placeholder="Write your experience today..."
          onChangeText={(text) => setExpBody(text)}
        />

        {/* Post Button */}
        <View style={{ paddingHorizontal: 80 }}>
          <AppButton
            onPress={onPressPost}
            backgroundColor={primaryColor}
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <Text style={AuthStyles.submitText}>Post</Text>
          </AppButton>
        </View>
      </View>

      {/* List of MyExperience Posts */}
      <ScrollView>
        {exp.map((expArray, index) => (
          <View key={index} style={styles.expArrayContainer}>
            <Text style={styles.titleText}>{expArray.title}</Text>
            <Text style={styles.bodyText}>{expArray.body}</Text>
          </View>
        ))}
      </ScrollView>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 40,
    marginHorizontal: 40,
  },
  expArrayContainer: {
    borderRadius: 4,
    marginHorizontal: 40,
    marginVertical: 4,
    padding: 16,
    backgroundColor: primaryColor,
  },
  titleText: {
    color: whiteColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyText: {
    color: whiteColor,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  titleInputText: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  // Valuenya sama dengan AuthStyles.formText, sebaiknya menggunakan itu
  bodyInputText: {
    color: primaryColor,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: primaryColor,
    marginTop: 16,
    marginBottom: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
