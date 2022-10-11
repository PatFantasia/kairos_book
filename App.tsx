import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Authentification from "./src/navigation/Authentification";
import Main from "./src/navigation/Main";

const App = () => {
  const isFirstTime = false;
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isFirstTime || !isLoggedIn ? (
        <Authentification onboarding={isFirstTime} auth={isLoggedIn} />
      ) : (
        <Main />
      )}
    </NavigationContainer>
  );
};

export default App;
