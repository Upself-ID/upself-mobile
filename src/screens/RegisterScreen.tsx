import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { OnboardingProps } from "../params/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";

type RegisterScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const RegisterScreen = ({
  navigation,
}: OnboardingProps<"RegisterScreen">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressGoToLogin = () => {
    navigation.replace("LoginScreen");
  };
  const onPressSubmit = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <AuthAppView>
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>
          Please enter your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            email
          </Text>
        </Text>
        <TextInput
          style={styles.formText}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email address"
        />

        <Text style={styles.mainText}>
          and your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            password
          </Text>
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.formText}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />
      </View>

      <View style={styles.footerContainer}>
        <Text style={{ margin: 8 }}>
          Have an account?{" "}
          <Text onPress={onPressGoToLogin} style={{ color: primaryColor }}>
            Login here
          </Text>
          .
        </Text>
        <AuthButton
          onPress={onPressSubmit}
          backgroundColor={primaryColor}
          borderColor={primaryColor}
          rippleColor={whiteColor}
        >
          <Text style={styles.submitText}>Submit</Text>
        </AuthButton>
      </View>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
  },
  mainText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  formText: {
    color: primaryColor,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: primaryColor,
    marginVertical: 16,
    padding: 8,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 32,
  },
  submitText: {
    color: whiteColor,
    fontWeight: "bold",
    marginHorizontal: 32,
    textAlign: "center",
  },
});
