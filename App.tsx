import React, { useEffect } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import Reactotron from "reactotron-react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector, useDispatch } from "react-redux";

import { store, persistor } from "stores/store";
import Authentification from "./src/navigation/Authentification";
import Main from "./src/navigation/Main";
import reactotron from "./ReactotronConfig";
import { getCurrentUserSelector, getUserAuthSelector } from "stores/selectors";
import { setUser, setAuth } from "stores/slices/authSlice";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

  console.log = reactotron.log;
  console.warn = reactotron.warn;
  console.error = reactotron.error;
}
Reactotron.log("Connected");

const App = () => {
  const isFirstTime = false;
  const isLogged = false;
  // const isLogged = useSelector(getUserAuthSelector);

  // const renderCurrentNavigator = () => {
  //   isFirstTime || !isLogged ? (
  //     <Authentification onboarding={isFirstTime} auth={isLogged} />
  //   ) : (
  //     <Main />
  //   );
  // };
  // useEffect(() => {
  //   // renderCurrentNavigator();
  // }, [isLogged]);

  // useFocusEffect(() => {
  //   console.log(" check auth : %d <-", useSelector(getUserAuthSelector));
  // });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {isFirstTime || !getUserAuthSelector ? (
            () => {
              <Authentification onboarding={isFirstTime} auth={isLogged} />;
              console.log(
                " check auth : %d <-",
                useSelector(getUserAuthSelector)
              );
            }
          ) : (
            <Main />
          )}
          {/* {renderCurrentNavigator()} */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
