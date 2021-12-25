import { getFirestore, collection, getDocs } from 'firebase/firestore';
import db from './firebase.service';

const GetAllBusinesses = async () => {
  const response = await db.collection('businesses').onSnapshot(snapshot => {
    console.log({ snapshot });
    return snapshot;
  });
  console.log({ response });
};

export { GetAllBusinesses };
