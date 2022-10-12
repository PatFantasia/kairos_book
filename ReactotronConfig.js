import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { NativeModules } from "react-native";
import url from "url";

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "Kairos Book",
    host: hostname,
  })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
