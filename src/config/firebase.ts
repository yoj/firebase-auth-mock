import "firebase/auth";
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCGXNn2-VPLy_YXbmKAEFOBe3AP9V0CSMs",
  authDomain: "react-sample-407d6.firebaseapp.com",
  databaseURL: "https://react-sample-407d6.firebaseio.com",
  projectId: "react-sample-407d6",
  storageBucket: "react-sample-407d6.appspot.com",
  messagingSenderId: "274957876495",
  appId: "1:274957876495:web:cf59e199b12224ad0e927a",
  measurementId: "G-LLE063JS5S"
};

firebase.initializeApp(config);

const auth = firebase.auth();
export default auth;