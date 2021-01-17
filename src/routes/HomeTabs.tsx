import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MyExperienceScreen from "../screens/MyExperienceScreen";
import MyHomeScreen from "../screens/MyHomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";

type HomeTabsProps = {};

const Tab = createBottomTabNavigator();

export const HomeTabs = ({}: HomeTabsProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyHomeScreen" component={MyHomeScreen} />
      <Tab.Screen name="MyExperienceScreen" component={MyExperienceScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
