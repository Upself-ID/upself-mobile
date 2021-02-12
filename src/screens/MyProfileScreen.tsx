import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthContext } from "../utilities/context/AuthContext";
import { GlobalColors } from "../styles/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faHistory,
  faTicketAlt,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

type MyProfileScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const MyProfileScreen = ({}: MyProfileScreenProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <AuthAppView>
      <View style={styles.screenContainer}>
        {/* Profile Container View */}
        <View>
          <View style={styles.profileNameContainer}>
            <FontAwesomeIcon icon={faUser} color="#888" size={60} />
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.profileUserName}>Panji Ahmad N</Text>
              <Text style={styles.profileMood}>
                Let's destigmatize mental illness!
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faTicketAlt} color="#888" size={20} />
              <Text>Vouchers</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faBell} color="#888" size={20} />
              <Text>Appointments</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faHistory} color="#888" size={20} />
              <Text>History</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faUserFriends} color="#888" size={20} />
              <Text>Friends</Text>
            </View>
          </View>
        </View>
        {/* Sign Out Container View */}
        <View style={{ paddingHorizontal: 120 }}>
          <AppButton
            onPress={logout}
            backgroundColor="#f00"
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
          </AppButton>
        </View>
      </View>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },

  // Profile
  profileNameContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  profileUserName: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  profileMood: {
    color: "#888",
    fontSize: 16,
  },

  // Menu
  menuContainer: {
    flexDirection: "row",
  },

  // Sign Out & Settings
  signOutText: {
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});
