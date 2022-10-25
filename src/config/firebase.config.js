import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDEE8nBUXknnKq-VM0GqdcGqIDnuoNuQ98",
  authDomain: "learning-deck.firebaseapp.com",
  projectId: "learning-deck",
  storageBucket: "learning-deck.appspot.com",
  messagingSenderId: "799527348097",
  appId: "1:799527348097:web:1e55019a78d0bd3ef1aa80"
};

const app = initializeApp(firebaseConfig);

export default app;