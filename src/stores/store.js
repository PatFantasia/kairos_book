/* eslint-disable no-import-assign */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";

import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
