import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { OnboardingProps } from "../utilities/params/OnboardingParamList";
import { GlobalColors } from "../styles/Colors";
import { AuthStyles } from "../styles/AuthStyles";
import { EmailInput, PasswordInput } from "../components/AppTextInput";
import { AuthContext } from "../utilities/context/AuthContext";

type LoginScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const LoginScreen = ({ navigation }: OnboardingProps<"LoginScreen">) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailText = (text: string) => setEmail(text);
  const onChangePasswordText = (text: string) => setPassword(text);

  const onPressGoToRegister = () => {
    navigation.replace("RegisterScreen");
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

        <EmailInput onChangeText={onChangeEmailText} />

        <Text style={AuthStyles.mainText}>
          and your{" "}
          <Text style={{ backgroundColor: primaryColor, color: whiteColor }}>
            {" "}
            password{" "}
          </Text>
        </Text>

        <PasswordInput onChangeText={onChangePasswordText} />

        <Text style={AuthStyles.mainForgotText}>or forgot your password?</Text>
      </View>

      <View style={AuthStyles.footerContainer}>
        <Text style={{ margin: 8 }}>
          Don't have an account?{" "}
          <Text onPress={onPressGoToRegister} style={{ color: primaryColor }}>
            Register here
          </Text>
          .
        </Text>

        <AppButton
          onPress={login}
          backgroundColor={primaryColor}
          borderColor={whiteColor}
          rippleColor={whiteColor}
        >
          <Text style={AuthStyles.submitText}>Submit</Text>
        </AppButton>
      </View>
    </AuthAppView>
  );
};
