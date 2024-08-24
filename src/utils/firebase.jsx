import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjgZz4cL4s5iAbHhT73HEFUiAGbUlfCuo",
  authDomain: "wehr-73a49.firebaseapp.com",
  projectId: "wehr-73a49",
  storageBucket: "wehr-73a49.appspot.com",
  messagingSenderId: "995441277332",
  appId: "1:995441277332:web:11fb9c0e18cf7d2a93b781"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;