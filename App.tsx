import { Routes } from "./src/routes/Routes";

export default Routes;

// import React, { useState } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Login from "./src/screens/LoginScreen";
// // import RegisterScreen from "./src/screens/RegisterScreen";

// import MyCounsel from "./src/screens/MyCounselScreen";
// import MyExperience from "./src/screens/MyExperienceScreen";
// import MyProfile from "./src/screens/MyProfileScreen";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   if (!isLoggedIn) {
//     return (
//       <Stack.Navigator>
//         {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
//         <Stack.Screen name="Login" component={Login} />
//         {/* <Stack.Screen name="Register" component={Register} /> */}
//       </Stack.Navigator>
//     );
//   } else {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator name="MyCounsel" component={MyCounsel}></Tab.Navigator>
//         <Tab.Navigator
//           name="MyExperience"
//           component={MyExperience}
//         ></Tab.Navigator>
//         <Tab.Navigator name="MyProfile" component={MyProfile}></Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// };
