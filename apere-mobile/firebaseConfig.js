
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
s

const firebaseConfig = {
  apiKey: "AIzaSyCY6-udW95_pTGNlnBWRPe3SxJdVSwnAEQ",
  authDomain: "apere-8e0cc.firebaseapp.com",
  projectId: "apere-8e0cc",
  storageBucket: "apere-8e0cc.appspot.com",
  messagingSenderId: "41888052130",
  appId: "1:41888052130:web:be2c7ba10693831dcbb8fb",
  measurementId: "G-PVY797DCLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);