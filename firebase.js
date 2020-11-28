import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAd83EKjTm-QAnDv7njaV5zRmGqF5GcLx8",
  authDomain: "ratemydeliveries.firebaseapp.com",
  databaseURL: "https://ratemydeliveries.firebaseio.com",
  projectId: "ratemydeliveries",
  storageBucket: "ratemydeliveries.appspot.com",
  messagingSenderId: "393935260552",
  appId: "1:393935260552:web:56a0df0d23ff604e0f483d",
  measurementId: "G-ZPTBJ2LH10",
});

export { firebaseConfig as firebase };
