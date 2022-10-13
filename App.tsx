import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Reactotron from "reactotron-react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "stores/store";
import Authentification from "./src/navigation/Authentification";
import Main from "./src/navigation/Main";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
Reactotron.log("Connected");

const App = () => {
  const isFirstTime = false;
  const isLoggedIn = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {isFirstTime || !isLoggedIn ? (
            <Authentification onboarding={isFirstTime} auth={isLoggedIn} />
          ) : (
            <Main />
          )}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
