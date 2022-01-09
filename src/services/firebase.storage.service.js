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
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  asd,
} from 'firebase/storage';

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
const getLogoDirectory = businessId => {
  return `${businessFilesDirectory}/${businessId}/logo`;
};
const getCatalogueImagesDirectory = businessId => {
  return `${businessFilesDirectory}/${businessId}/catalogue`;
};

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
    // if (item.data().isVerified)
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

const uploadFile = async (businessId, input) => {
  if (input.constructor.name === 'File') {
    const fileRef = ref(storage, getLogoDirectory(businessId, input?.name));

    uploadBytes(fileRef, input)
      .then(snapshot => console.log('logo upload Complete!: ', snapshot))
      .catch(e => console.log('Error Uploading Logo: ', e));
    console.log(fileRef);
  } else if (input.constructor.name === 'Array') {
    input.forEach(item => {
      const fileRef = ref(
        storage,
        getCatalogueImagesDirectory(businessId, item?.name),
      );

      uploadBytes(fileRef, item)
        .then(snapshot => console.log('catalogue upload Complete!: ', snapshot))
        .catch(e => console.log('Error Uploading Catalogue Image: ', e));
      console.log(fileRef);
    });
  }
};

const getLogo = async businessId => {
  const list = [];

  const logoRef = ref(storage, getLogoDirectory(businessId));
  await listAll(logoRef)
    .then(res => {
      res.items.forEach(itemRef => {
        if (itemRef) {
          getDownloadURL(itemRef).then(url => {
            list.push(url);
          });
        }
      });
    })
    .catch(error => {
      console.error('Uh-oh, an error occurred while retrieving Logo!: ', error);
    });
  return list[0];
};

const getCatalogueImages = async businessId => {
  const list = [];

  const catalogueImagesRef = ref(
    storage,
    getCatalogueImagesDirectory(businessId),
  );
  listAll(catalogueImagesRef)
    .then(res => {
      res.items.forEach(itemRef => {
        if (itemRef) {
          getDownloadURL(itemRef).then(url => {
            list.push(url);
          });
        }
      });
    })
    .catch(error => {
      console.error(
        'Uh-oh, an error occurred while retrieving Catalogue Images!: ',
        error,
      );
    });
  return list;
};

export default {
  getAllApprovedBusinesses,
  registerBusiness,
  getBusiness,
  uploadFile,
  getLogo,
  getCatalogueImages,
};
