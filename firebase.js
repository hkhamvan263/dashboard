// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcAjsiGtXymppECEMyWLcZX4qR80JEVA",
  authDomain: "dashboard-5d90d.firebaseapp.com",
  projectId: "dashboard-5d90d",
  storageBucket: "dashboard-5d90d.appspot.com",
  messagingSenderId: "437700480209",
  appId: "1:437700480209:web:b11914e269bac6eddcc9f0",
  measurementId: "G-V3M5LL9KH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//const analytics = getAnalytics(app);

export {db}

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAQkkj7Te3Cupp_VgAv-cqI78vIXM6ydjg",
//   authDomain: "social-media-dashboard-1763d.firebaseapp.com",
//   projectId: "social-media-dashboard-1763d",
//   storageBucket: "social-media-dashboard-1763d.appspot.com",
//   messagingSenderId: "488948197111",
//   appId: "1:488948197111:web:aec03fe30ab8b54dd455f2",
//   measurementId: "G-PECCR5416H"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const db = getFirestore(app)

// export {db}

