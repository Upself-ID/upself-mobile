import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyExperienceScreen } from "../screens/MyExperienceScreen";
import { MyHomeScreen } from "../screens/MyHomeScreen";
import { MyProfileScreen } from "../screens/MyProfileScreen";
import { GlobalColors } from "../styles/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faPen, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

type HomeTabsProps = {};

const Tab = createMaterialBottomTabNavigator();

const { primaryColor, whiteColor } = GlobalColors;

export const HomeTabs = ({}: HomeTabsProps) => {
  return (
    <Tab.Navigator
      initialRouteName="MyExperienceScreen"
      backBehavior="none"
      shifting={true}
      barStyle={{ backgroundColor: whiteColor }}
      activeColor={primaryColor}
    >
      <Tab.Screen
        name="MyHomeScreen"
        component={MyHomeScreen}
        options={{
          title: "My Home",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <FontAwesomeIcon icon={faHome} color={primaryColor} size={20} />
              );
            } else {
              return <FontAwesomeIcon icon={faHome} color="#888" size={20} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="MyExperienceScreen"
        component={MyExperienceScreen}
        options={{
          title: "My Experience",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <FontAwesomeIcon icon={faPen} color={primaryColor} size={20} />
              );
            } else {
              return <FontAwesomeIcon icon={faPen} color="#888" size={20} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          title: "My Profile",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  color={primaryColor}
                  size={20}
                />
              );
            } else {
              return (
                <FontAwesomeIcon icon={faUserCircle} color="#888" size={20} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
