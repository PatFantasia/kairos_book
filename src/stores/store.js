/* eslint-disable no-import-assign */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./slices/authSlice";
import reactotron from "../../ReactotronConfig";

const rootReducer = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = [reactotron.createEnhancer()];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: composedEnhancers,
});
export const persistor = persistStore(store);
