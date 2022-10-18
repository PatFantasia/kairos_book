import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWBmdRzK3VtSSKt9ue3h-KKnPucrv5WZI",
  authDomain: "kairosbook-d34e1.firebaseapp.com",
  projectId: "kairosbook-d34e1",
  databaseUrl: "https://kairosbook-d34e1.firebaseio.com",
  storageBucket: "kairosbook-d34e1.appspot.com",
  messagingSenderId: "414773573757",
  appId: "1:414773573757:web:74f27800b59f5765cf9914",
  measurementId: "G-QHP2ZQ3GQV",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

enableIndexedDbPersistence(database).catch((err) => {
  if (err.code == "failed-precondition") {
    console.log({ err });
  } else if (err.code == "unimplemented") {
    console.log({ err });
  }
});

export default app;
