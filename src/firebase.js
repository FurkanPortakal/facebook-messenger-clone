import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHkQwq-CQssioFX_eo1mI6gtoUkrZ5jYc",
  authDomain: "facebook-messenger-clone-5cadd.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-5cadd.firebaseio.com",
  projectId: "facebook-messenger-clone-5cadd",
  storageBucket: "facebook-messenger-clone-5cadd.appspot.com",
  messagingSenderId: "223562375067",
  appId: "1:223562375067:web:50f082ba16c52d6391cb3e",
  measurementId: "G-ZTV0EWZ2MY",
});

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
