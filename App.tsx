import React from "react";
import { Routes } from "./src/routes/Routes";
import { AuthProvider } from "./src/utilities/context/AuthContext";

type AppProps = {};

const App = ({}: AppProps) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
