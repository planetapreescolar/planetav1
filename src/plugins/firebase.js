import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here

const firebaseConfig = {
apiKey: "AIzaSyAFKFFc5NQ8LAiR0KB_FVkUP3s3JEP9jCw",
authDomain: "planetapreescolar-39350.firebaseapp.com",
databaseURL: "https://planetapreescolar-39350.firebaseio.com",
projectId: "planetapreescolar-39350",
storageBucket: "planetapreescolar-39350.appspot.com",
messagingSenderId: "1085237806661",
appId: "1:1085237806661:web:8bf6f3d51794c3a88d452c",
measurementId: "G-MTG60YV1RZ"
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('usuarios')


// export utils/refs
export {
  db,
  auth,
  usersCollection
}