// import AsyncStorage from "@react-native-community/async-storage";
import { Dispatch } from "redux";

export const AUTHENTICATE = "AUTHENTICATE";
// export const LOGOUT = "LOGOUT";

type AuthStoreProps = {
  email: string;
  password: string;
  dispatch: Dispatch;
};

export const login = ({ email, password }: AuthStoreProps) => {
  return async ({ dispatch }: AuthStoreProps) => {
    const response = await fetch("https://upself.id/signin/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
  };
};
