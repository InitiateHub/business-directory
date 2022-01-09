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
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import { allBusinesses } from 'assets/mockData';
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

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();
// Create a storage reference from our storage service
// const storageRef = ref(storage);

const businessFilesDirectory = ref(storage, 'business_files');

const getBusiness = async id => {
  let result;
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    result = docSnap.data();
  } else {
    // console.log('No such document!');
    // TODO: Remove mock data requests
    result = allBusinesses.find(item => item.id === id);
  }

  return result;
};

const getAllApprovedBusinesses = async () => {
  const _results = [];

  // TODO: Remove MockData Queries
  allBusinesses.forEach(item => {
    if (item.isVerified)
      _results.push({
        ...item,
        id: item.id,
      });
  });

  const reqQuery = query(
    collection(db, collectionName),
    where('isVerified', '==', true),
  );

  const querySnapshot = await getDocs(reqQuery);
  querySnapshot.forEach(item => {
    if (item.data().isVerified)
      _results.push({
        ...item.data(),
        id: item.id,
      });
  });

  return _results;
};

// TODO: Edit this function
const registerBusiness = async data => {
  // const {
  //   catalogueImages,
  //   category,
  //   description,
  //   email,
  //   gpsLocation,
  //   isVerified,
  //   isFeatured,
  //   location,
  //   mainImage,
  //   name,
  //   numberofEmployees,
  //   phones,
  //   services,
  //   website,
  //   id,
  // } = data;

  // const newData = {
  //   // catalogueImages,
  //   category,
  //   description,
  //   email,
  //   gpsLocation,
  //   isVerified: true,
  //   isFeatured,
  //   location,
  //   // mainImage,
  //   name,
  //   // numberofEmployees,
  //   // phones,
  //   // services,
  //   website,
  //   id,
  //   dateAdded: serverTimestamp(),
  // };

  try {
    const newDocRef = collection(db, collectionName);
    const newDoc = await addDoc(newDocRef, data);
    // const newDoc = await setDoc(newDocRef, newData);
  } catch (e) {
    console.log(e.message);
  }
};

const uploadFile = (businessId, input) => {
  if (input.constructor.name === 'File') {
    const fileRef = ref(
      storage,
      `${businessFilesDirectory}/${businessId}/logo/${input?.name}`,
    );

    uploadBytes(fileRef, input).then(snapshot =>
      console.log('logo upload Complete!: ', snapshot),
    );
  } else if (input.constructor.name === 'Array') {
    input.forEach(item => {
      const fileRef = ref(
        storage,
        `${businessFilesDirectory}/${businessId}/catalogue/${item?.name}`,
      );

      uploadBytes(fileRef, item).then(snapshot =>
        console.log('catalogue upload Complete!: ', snapshot),
      );
    });
  }
};

export default {
  getAllApprovedBusinesses,
  registerBusiness,
  getBusiness,
  uploadFile,
};
