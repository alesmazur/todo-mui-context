import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2nhWX9xJjw69lWLhBQgaHxB7EVnBrb6A",
  authDomain: "todo-mui-392cf.firebaseapp.com",
  projectId: "todo-mui-392cf",
  storageBucket: "todo-mui-392cf.appspot.com",
  messagingSenderId: "483637224331",
  appId: "1:483637224331:web:d4313acc28fd52dc33858e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
