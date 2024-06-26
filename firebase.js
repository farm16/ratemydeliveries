import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fv = firebase.firestore.FieldValue;
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const local = firebase.auth.Auth.Persistence.LOCAL;
const config = {
  apiKey: "AIzaSyAd83EKjTm-QAnDv7njaV5zRmGqF5GcLx8",
  authDomain: "ratemydeliveries.firebaseapp.com",
  databaseURL: "https://ratemydeliveries.firebaseio.com",
  projectId: "ratemydeliveries",
  storageBucket: "ratemydeliveries.appspot.com",
  messagingSenderId: "393935260552",
  appId: "1:393935260552:web:56a0df0d23ff604e0f483d",
  measurementId: "G-ZPTBJ2LH10",
};

const firebaseApp =
  firebase.apps && firebase.apps.length > 0
    ? firebase.apps[0]
    : firebase.initializeApp(config);
// const firebaseApp = firebase.initializeApp(config);
export { firebaseApp as firebase };
