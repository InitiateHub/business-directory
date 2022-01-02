import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import MockData from 'assets/mockData';
import { initializeApp, getApps } from 'firebase/app';
import firebaseConfig from '../utils/firebase.config';

// let app;
// let db;
const collectionName = 'businesses';

// check if firebase app has been initialized previously
// if not, initialize with the config
// if (!getApps().length) {
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// }

const getBusiness = async id => {
  let result;
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    result = docSnap.data();
  } else {
    // console.log('No such document!');
    // TODO: Remove mock data requests
    result = MockData.find(item => item.id === id);
  }

  return result;
};

const getAllApprovedBusinesses = async () => {
  const _results = [];

  // TODO: Remove MockData Queries
  MockData.forEach(item => {
    if (item.isApproved)
      _results.push({
        ...item,
        id: item.id,
      });
  });

  const reqQuery = query(
    collection(db, collectionName),
    where('isApproved', '==', true),
  );

  const querySnapshot = await getDocs(reqQuery);
  querySnapshot.forEach(item => {
    if (item.data().isApproved)
      _results.push({
        ...item.data(),
        id: item.id,
      });
  });

  return _results;
};

// TODO: Edit this function
const registerBusiness = async data => {
  const {
    catalogueImages,
    category,
    description,
    email,
    gpsLocation,
    isApproved,
    isFeatured,
    location,
    mainImage,
    name,
    numberofEmployees,
    phone,
    services,
    website,
    id,
  } = data;

  const newData = {
    // catalogueImages,
    category,
    description,
    email,
    gpsLocation,
    isApproved: true,
    isFeatured,
    location,
    // mainImage,
    name,
    // numberofEmployees,
    // phone,
    // services,
    website,
    id,
    dateAdded: serverTimestamp(),
  };

  try {
    const newDocRef = collection(db, collectionName);
    const newDoc = await addDoc(newDocRef, newData);
    // const newDoc = await setDoc(newDocRef, newData);
  } catch (e) {
    console.log(e.message);
  }
};

export default { getAllApprovedBusinesses, registerBusiness, getBusiness };
