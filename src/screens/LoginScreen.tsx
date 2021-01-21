import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { OnboardingProps } from "../params/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";
import { AuthStyles } from "../styles/AuthStyles";

type LoginScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const LoginScreen = ({ navigation }: OnboardingProps<"LoginScreen">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressGoToRegister = () => {
    navigation.replace("RegisterScreen");
  };
  const onPressSubmit = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <AuthAppView>
      <View style={AuthStyles.mainContainer}>
        <Text style={AuthStyles.mainText}>
          Please enter your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            email
          </Text>
        </Text>
        <TextInput
          style={AuthStyles.formText}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email address"
        />

        <Text style={AuthStyles.mainText}>
          and your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            password
          </Text>
        </Text>
        <TextInput
          secureTextEntry={true}
          style={AuthStyles.formText}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />
      </View>

      <View style={AuthStyles.footerContainer}>
        <Text style={{ margin: 8 }}>
          Don't have an account?{" "}
          <Text onPress={onPressGoToRegister} style={{ color: primaryColor }}>
            Register here
          </Text>
          .
        </Text>
        <AuthButton
          onPress={onPressSubmit}
          backgroundColor={primaryColor}
          borderColor={primaryColor}
          rippleColor={whiteColor}
        >
          <Text style={AuthStyles.submitText}>Submit</Text>
        </AuthButton>
      </View>
    </AuthAppView>
  );
};
