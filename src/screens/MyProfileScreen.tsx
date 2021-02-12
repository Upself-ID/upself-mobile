import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { AuthContext } from "../utilities/context/AuthContext";
import { GlobalColors } from "../styles/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faCog,
  faHistory,
  faInfoCircle,
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
            <FontAwesomeIcon icon={faUser} color="#f79194" size={60} />
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.profileUserName}>Panji Ahmad N</Text>
              <Text style={styles.profileMood}>
                Let's destigmatize mental illness!
              </Text>
            </View>
          </View>

          {/* Account Information */}
          <View style={{ marginBottom: 16 }}>
            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faTicketAlt} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>Vouchers</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faBell} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>Appointments</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faHistory} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>History</Text>
            </View>

            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faUserFriends} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>Friends</Text>
            </View>
          </View>

          {/* Setting and About */}
          <View style={{ marginBottom: 16 }}>
            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faCog} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>Setting</Text>
            </View>
            <View style={styles.menuContainer}>
              <FontAwesomeIcon icon={faInfoCircle} color="#c4c4c4" size={32} />
              <Text style={styles.menuText}>About</Text>
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
    color: "#737373",
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
    paddingVertical: 8,
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderColor: "#888",
  },
  menuText: {
    color: "#888",
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 16,
  },

  // Sign Out & Settings
  signOutText: {
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});
