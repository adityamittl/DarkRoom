import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAhoRHpYDGO1GqajmANe-n6W1fynREnrUI",
  authDomain: "hitech-c86fa.firebaseapp.com",
  projectId: "hitech-c86fa",
  storageBucket: "hitech-c86fa.appspot.com",
  messagingSenderId: "566445306479",
  appId: "1:566445306479:web:855d4d885f0efbac80d39a",
  measurementId: "G-GX0Y77EMS3"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }
