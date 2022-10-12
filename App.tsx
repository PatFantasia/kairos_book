import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Reactotron from "reactotron-react-native";

import Authentification from "./src/navigation/Authentification";
import Main from "./src/navigation/Main";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
Reactotron.log("Connected");

const App = () => {
  const isFirstTime = false;
  const isLoggedIn = false;

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
