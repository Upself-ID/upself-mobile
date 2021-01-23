import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { OnboardingProps } from "../utilities/params/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";
import { AuthStyles } from "../styles/AuthStyles";
import { EmailInput, PasswordInput } from "../components/AppTextInput";

type RegisterScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const RegisterScreen = ({
  navigation,
}: OnboardingProps<"RegisterScreen">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailText = (text: string) => setEmail(text);
  const onChangePasswordText = (text: string) => setPassword(text);

  const onPressGoToLogin = () => {
    navigation.replace("LoginScreen");
  };
  const onPressSubmit = () => {
    if (email && password) {
      navigation.navigate("LoginScreen");
    } else {
      Alert.alert("Please fill the blank form");
    }
  };

  return (
    <AuthAppView>
      <View style={AuthStyles.mainContainer}>
        <Text style={AuthStyles.mainText}>
          Please enter your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            {" "}
            email{" "}
          </Text>
        </Text>

        <EmailInput onChangeText={onChangeEmailText} email={email} />

        <Text style={AuthStyles.mainText}>
          and your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            {" "}
            password{" "}
          </Text>
        </Text>

        <PasswordInput
          onChangeText={onChangePasswordText}
          password={password}
        />
      </View>

      <View style={AuthStyles.footerContainer}>
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
          borderColor={whiteColor}
          rippleColor={whiteColor}
        >
          <Text style={AuthStyles.submitText}>Submit</Text>
        </AuthButton>
      </View>
    </AuthAppView>
  );
};
