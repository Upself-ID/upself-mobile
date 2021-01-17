import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/LoginScreen";
import MyExperience from "../screens/MyExperienceScreen";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  MyExperience: {
    screen: MyExperience,
  },
};

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
