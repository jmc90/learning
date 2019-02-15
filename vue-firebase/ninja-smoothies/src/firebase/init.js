import firebase from 'firebase'
import firestore from 'firebase/firestore'

const API_KEY = process.env.FIRESTORE_API_KEY
// Initialize Firebase
var config = {
  apiKey: API_KEY,
  authDomain: "udemy-ninja-smoothies-fa4a0.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-fa4a0.firebaseio.com",
  projectId: "udemy-ninja-smoothies-fa4a0",
  storageBucket: "udemy-ninja-smoothies-fa4a0.appspot.com",
  messagingSenderId: "397232119337"
};
const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore()

