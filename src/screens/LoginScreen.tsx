import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
      <View>
        <View style={AuthStyles.mainContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/adaptive-icon.png")}
          />

          <Text style={AuthStyles.mainText}>Please enter the following:</Text>
        </View>

        <View style={{ marginHorizontal: 64 }}>
          <EmailInput onChangeText={onChangeEmailText} />
          <PasswordInput onChangeText={onChangePasswordText} />
        </View>

        <View style={AuthStyles.mainContainer}>
          <Text style={AuthStyles.mainForgotText}>
            or forgot your password?
          </Text>
        </View>
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

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
