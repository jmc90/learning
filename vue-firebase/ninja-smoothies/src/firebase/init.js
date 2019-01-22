import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCs5XhEjkYlGhh1w-4c6B1TdardVl_Hhpg",
  authDomain: "udemy-ninja-smoothies-fa4a0.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-fa4a0.firebaseio.com",
  projectId: "udemy-ninja-smoothies-fa4a0",
  storageBucket: "udemy-ninja-smoothies-fa4a0.appspot.com",
  messagingSenderId: "397232119337"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()

