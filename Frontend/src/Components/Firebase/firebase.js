import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyARW1KNGKGpxBWja_-X5H5nw3EhmyGriX4",
  authDomain: "neo-tokyo-419405.firebaseapp.com",
  projectId: "neo-tokyo-419405",
  storageBucket: "neo-tokyo-419405.appspot.com",
  messagingSenderId: "869017962695",
  appId: "1:869017962695:web:79550fe4772a0b025156e2"
};


const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getFirestore(app); 
export { imgDB, txtDB };