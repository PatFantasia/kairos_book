import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWBmdRzK3VtSSKt9ue3h-KKnPucrv5WZI",
  authDomain: "kairosbook-d34e1.firebaseapp.com",
  projectId: "kairosbook-d34e1",
  databaseUrl: "kairosbook-d34e1.firebaseio.com",
  storageBucket: "kairosbook-d34e1.appspot.com",
  messagingSenderId: "414773573757",
  appId: "1:414773573757:web:74f27800b59f5765cf9914",
  measurementId: "G-QHP2ZQ3GQV",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

const database = app.firestore();

export { firebaseConfig, app, auth, database };
