import firebase from 'firebase' 

const firebaseConfig = {
    apiKey: "AIzaSyC-vZ6-Q8UcJOlt6RWDHFo2g_97w_ph_-M",
    authDomain: "whats-app-81a1f.firebaseapp.com",
    projectId: "whats-app-81a1f",
    storageBucket: "whats-app-81a1f.appspot.com",
    messagingSenderId: "895505017936",
    appId: "1:895505017936:web:8767523b4efa0578463555"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;