import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCph4SQ3l34Udc10-esQLQ7mIZd1e57N5M",
    authDomain: "disnepplus-clone-cb001.firebaseapp.com",
    projectId: "disnepplus-clone-cb001",
    storageBucket: "disnepplus-clone-cb001.appspot.com",
    messagingSenderId: "408900358022",
    appId: "1:408900358022:web:67396f82ec58a83a682607"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage;

  export {auth, provider, storage};
  export default db;