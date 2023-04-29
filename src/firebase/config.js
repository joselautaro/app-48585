import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPq3qfCur0gyJBZObk1c4p4uOnyulUSDM",
  authDomain: "react-app-c8c2d.firebaseapp.com",
  projectId: "react-app-c8c2d",
  storageBucket: "react-app-c8c2d.appspot.com",
  messagingSenderId: "830875083282",
  appId: "1:830875083282:web:562a59b44353ff2c372ecb"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}