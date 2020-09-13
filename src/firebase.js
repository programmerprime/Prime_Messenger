import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEnSZ1syQMDDXIcLUjN1wx_NLrwDDLOYA",
    authDomain: "whatsapp-clone-prime.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-prime.firebaseio.com",
    projectId: "whatsapp-clone-prime",
    storageBucket: "whatsapp-clone-prime.appspot.com",
    messagingSenderId: "110036387790",
    appId: "1:110036387790:web:7b1d189ffe13b8809d8d9f"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;