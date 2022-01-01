// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import * as storage from 'firebase/storage';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA9JVRXc7uSMjQWu37TQKlDOuYTQ1FxJU',
  authDomain: 'the-business-directory-adb04.firebaseapp.com',
  projectId: 'the-business-directory-adb04',
  storageBucket: 'the-business-directory-adb04.appspot.com',
  messagingSenderId: '872309185008',
  appId: '1:872309185008:web:d2541dbf83c2cae1e4e535',
  measurementId: 'G-R47JZ194NJ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { storage, firebaseApp, analytics };
export default db;
