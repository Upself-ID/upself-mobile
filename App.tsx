import React from "react";
import { Routes } from "./src/routes/Routes";
import { AuthProvider } from "./src/services/AuthContext";

type AppProps = {};

const App = ({}: AppProps) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
