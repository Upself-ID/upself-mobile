import React, { createContext, ReactNode, useState } from "react";
import { OnboardingProps } from "../config/OnboardingParamList";
import { SplashScreen } from "../screens/SplashScreen";

type AuthProviderProps = { children: ReactNode };

type User = null | string;

export const AuthContext = createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => setUser("Upself"),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
