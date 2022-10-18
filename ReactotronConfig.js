import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import url from "url";

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
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
  .use(reactotronRedux())
  .connect();

export default reactotron;
