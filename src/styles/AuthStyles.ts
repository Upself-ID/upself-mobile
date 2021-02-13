import { StyleSheet } from "react-native";
import { GlobalColors } from "./Colors";

const { primaryColor, whiteColor } = GlobalColors;

export const AuthStyles = StyleSheet.create({
  mainContainer: {
    // marginHorizontal: 32,
    alignItems: "center",
  },
  mainText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  mainForgotText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  formText: {
    color: primaryColor,
    // borderRadius: 8,
    borderBottomWidth: 2,
    borderColor: primaryColor,
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  submitText: {
    color: whiteColor,
    fontWeight: "bold",
    marginHorizontal: 32,
    textAlign: "center",
  },
});
