import firebase from 'firebase/app';
import 'firebase/firestore';

export function DB() {
  try {
    const firebaseConfig = {
      apiKey: "AIzaSyClsl3UAOL73mC4TlGl-sfxV2sE1EXobig",
      authDomain: "carlist-97672.firebaseapp.com",
      projectId: "carlist-97672",
      storageBucket: "carlist-97672.appspot.com",
      messagingSenderId: "508149512964",
      appId: "1:508149512964:web:63f9914a167fd9b57f2e51",
      measurementId: "G-0VEHXCEYD2"
    };
  
    firebase.initializeApp(firebaseConfig);

  } catch (error) {
    if (!/already exists/.test(error.message)) {
      throw new Error('Firebase does not initialize correctly!')
    }
  }

  return firebase.firestore();
}
