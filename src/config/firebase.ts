import "firebase/auth";
import firebase from 'firebase';

const config = {
  
};

firebase.initializeApp(config);

const auth = firebase.auth();
export default auth;