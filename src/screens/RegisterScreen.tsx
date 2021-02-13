import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
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
      </View>

      <View style={AuthStyles.footerContainer}>
        <Text style={{ margin: 8 }}>
          Have an account?{" "}
          <Text onPress={onPressGoToLogin} style={{ color: primaryColor }}>
            Login here
          </Text>
          .
        </Text>

        <AppButton
          onPress={onPressSubmit}
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
