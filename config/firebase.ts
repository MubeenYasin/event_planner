import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb5tlhpqBgpHqURSXQ5YetdtBxKQRwuKY",
  authDomain: "event-planner-b83a8.firebaseapp.com",
  projectId: "event-planner-b83a8",
  storageBucket: "event-planner-b83a8.appspot.com",
  messagingSenderId: "530565040000",
  appId: "1:530565040000:web:b73526c7101fa38454a365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth }