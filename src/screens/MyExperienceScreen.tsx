import {
  faComment,
  faHeart,
  faShareAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
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
    {
      title: "Hello World",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo sed libero scelerisque finibus. Nam faucibus, nisi eu vestibulum consectetur, elit nisl lobortis justo, vitae consequat elit nunc sed quam. Ut ornare nec elit eget pharetra.",
    },
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
        <View style={{ paddingHorizontal: 80, paddingBottom: 16 }}>
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
            <View style={{ marginHorizontal: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faUser} color="#a7faeb" size={20} />
                <Text style={styles.profileNameText}>Anonymous</Text>
              </View>
              <Text style={styles.titleText}>{expArray.title}</Text>
              <Text style={styles.bodyText}>{expArray.body}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 16,
                justifyContent: "space-around",
              }}
            >
              <FontAwesomeIcon icon={faHeart} color="#ffa588" size={20} />
              <FontAwesomeIcon icon={faComment} color="#fadba0" size={20} />
              <FontAwesomeIcon icon={faShareAlt} color="#b7e5e9" size={20} />
            </View>
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

  // Input Form
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

  // MyExperience Posts
  expArrayContainer: {
    borderRadius: 4,
    paddingBottom: 16,
    marginBottom: 16,
    borderColor: "#72948e",
    borderBottomWidth: 1,
  },
  profileNameText: {
    color: "#093257",
    fontWeight: "bold",
    marginLeft: 8,
  },
  titleText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "justify",
  },
  bodyText: {
    color: "#093257",
    paddingHorizontal: 8,
    paddingTop: 4,
    textAlign: "justify",
  },
});
