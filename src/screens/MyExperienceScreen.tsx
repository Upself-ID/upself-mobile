import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthStyles } from "../styles/AuthStyles";
import { GlobalColors } from "../styles/Colors";

type MyExperienceScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const MyExperienceScreen = ({}: MyExperienceScreenProps) => {
  const [experienceText, setExperienceText] = useState("");

  return (
    <AuthAppView>
      <View style={styles.screenContainer}>
        <Text style={styles.headerText}>My Experience</Text>
        <TextInput
          multiline
          style={styles.postInputText}
          // value={experienceText}
          placeholder="Write your experience today..."
        />

        <View style={{ paddingHorizontal: 80 }}>
          <AuthButton
            onPress={() => Alert.alert("Please fill the blank form")}
            backgroundColor={primaryColor}
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <Text style={AuthStyles.submitText}>Submit</Text>
          </AuthButton>
        </View>
      </View>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    margin: 40,
  },
  headerText: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  // Valuenya sama dengan AuthStyles.formText, sebaiknya menggunakan itu
  postInputText: {
    color: primaryColor,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: primaryColor,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

// import React, { useState } from "react";
// import { Text, TextInput, SafeAreaView, StyleSheet, View } from "react-native";

// import { GlobalStyles } from "../styles/GlobalStyles";

// export default function MyExperienceScreen({ navigation }) {
//   const [experience, setExperience] = useState("");
//   return (
//     <SafeAreaView style={GlobalStyles.container}>
//       <View style={styles.container}>
//         <Text>Hi, </Text>
//         <Text>Welcome to My Experience</Text>
//         <TextInput
//           multiline
//           placeholder="Ceritakan kisahmu..."
//           style={styles.formExperience}
//           onChangeText={(text) => setExperience(text)}
//         />
//         <Text>Buat ngetes</Text>
//         <Text>{experience}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   formExperience: {
//     height: 40,
//     borderColor: "#0d7686",
//     color: "#0d7686",
//     borderWidth: 1,
//     padding: 8,
//     margin: 10,
//   },
// });
