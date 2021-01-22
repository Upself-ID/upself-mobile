import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthContext } from "../services/AuthContext";
import { AuthStyles } from "../styles/AuthStyles";
import { GlobalColors } from "../styles/Colors";

type MyProfileScreenProps = {};

const { whiteColor } = GlobalColors;

export const MyProfileScreen = ({}: MyProfileScreenProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <AuthAppView>
      <View>
        <View style={styles.screenContainer}>
          <AuthButton
            onPress={logout}
            backgroundColor="#f00"
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <Text style={AuthStyles.submitText}>Post</Text>
          </AuthButton>
        </View>
      </View>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 40,
    marginHorizontal: 40,
  },
});
