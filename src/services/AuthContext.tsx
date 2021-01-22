import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const { user: thisUser } = useContext(AuthContext);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          setUser("Panji");
          console.log("Auth Provider pressed");
          console.log("user (state) " + user);
          console.log("thisUser (context) " + thisUser);
        },
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
