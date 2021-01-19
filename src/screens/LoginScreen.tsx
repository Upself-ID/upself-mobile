import React from "react";
import { Text } from "react-native";
import { CenterSafeView } from "../components/CenterSafeView";
import { OnboardingProps } from "../params/OnboardingParamList";

type LoginScreenProps = {};

export const LoginScreen = ({ navigation }: OnboardingProps<"LoginScreen">) => {
  return (
    <CenterSafeView backgroundColor={"#0d7686"}>
      <Text>Login</Text>
    </CenterSafeView>
  );
};

// export default function Login({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginHandler = () => {
//     navigation.navigate("MyExperience");
//   };

//   return (
//     <SafeAreaView style={GlobalStyles.container}>
//       <Image
//         style={styles.logo}
//         source={require("../../assets/images/adaptive-icon.png")}
//       />
//       <View style={styles.formContainer}>
//         <Text style={styles.welcomeText}>Welcome to Upself</Text>
//         <TextInput
//           style={styles.formText}
//           onChangeText={(text) => setEmail(text)}
//           value={email}
//           placeholder="Email address"
//         />
//         <TextInput
//           secureTextEntry={true}
//           style={styles.formText}
//           onChangeText={(text) => setPassword(text)}
//           value={password}
//           placeholder="Password"
//         />
//         <View>
//           <Button title="Login" onPress={loginHandler} color="#0d7686" />
//           {/* <Button title="Register" onPress={loginHandler} color="#000" />  */}
//         </View>
//         {/* <SignButton text="Login" onPress={loginHandler} /> */}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   logo: {
//     flex: 1,
//     width: 200,
//     height: 200,
//     margin: 10,
//   },
//   formContainer: {
//     flex: 2,
//     flexDirection: "column",
//     // justifyContent: "center",
//   },
//   formText: {
//     height: 40,
//     borderColor: "#0d7686",
//     color: "#0d7686",
//     borderBottomWidth: 2,
//     padding: 8,
//     margin: 15,
//   },
//   welcomeText: {
//     color: "#0d7686",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
// });
