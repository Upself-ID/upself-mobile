import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthStyles } from "../styles/AuthStyles";
import { GlobalColors } from "../styles/Colors";

type MyExperienceScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const MyExperienceScreen = ({}: MyExperienceScreenProps) => {
  const [expTitle, setExpTitle] = useState("");
  const [expBody, setExpBody] = useState("");
  const [exp, setExp] = useState([
    { id: 1, title: "First Post", body: "Hello World" },
  ]);

  const onPressPost = () => {
    setExp([...exp, { id: Math.random(), title: expTitle, body: expBody }]);
    console.log(exp);
  };

  return (
    <AuthAppView>
      <View style={styles.screenContainer}>
        {/* <Text style={styles.titleText}>My Experience</Text> */}
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

        <View
          style={{
            paddingHorizontal: 80,
          }}
        >
          <AuthButton
            onPress={onPressPost}
            backgroundColor={primaryColor}
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <Text style={AuthStyles.submitText}>Post</Text>
          </AuthButton>
        </View>
      </View>

      <ScrollView>
        {/* <Text style={styles.headerText}>Your Blog Here</Text> */}
        {exp.map((title) => (
          <View style={styles.postListContainer}>
            <Text style={styles.titleText}>{title.title}</Text>
            <Text style={styles.bodyText}>{title.body}</Text>
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
  postListContainer: {
    borderRadius: 4,
    marginHorizontal: 40,
    marginVertical: 4,
    padding: 16,
    backgroundColor: primaryColor,
  },
  // headerText: {
  //   color: primaryColor,
  //   fontSize: 24,
  //   fontWeight: "bold",
  // },
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
