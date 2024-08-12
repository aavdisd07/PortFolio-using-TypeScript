import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6JD1W0ftGC2t6yYaTYuX991rydACLWSM",
  authDomain: "portfolio-asd.firebaseapp.com",
  projectId: "portfolio-asd",
  storageBucket: "portfolio-asd.appspot.com",
  messagingSenderId: "698272252730",
  appId: "1:698272252730:web:e2781cbc95079055dd8603",
  measurementId: "G-G3JBXSRHLJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db= getFirestore(app);
// function getFirestore(app: FirebaseApp) {
//     throw new Error("Function not implemented.");
// }
