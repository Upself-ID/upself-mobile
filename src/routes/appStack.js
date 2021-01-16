import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/Login";
import MyExperience from "../screens/MyExperience";

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
