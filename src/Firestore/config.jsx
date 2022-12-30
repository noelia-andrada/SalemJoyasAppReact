import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrr-XBTUZtKXaGQlaJZ9mwArs0iFgDkKY",
  authDomain: "salem-joyas.firebaseapp.com",
  projectId: "salem-joyas",
  storageBucket: "salem-joyas.appspot.com",
  messagingSenderId: "1042565841656",
  appId: "1:1042565841656:web:1ee638b1ca3fe4a4a6310d"
};


const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}