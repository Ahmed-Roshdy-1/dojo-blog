import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ez6XWCD2Dxm9wKOVJaSykB8fyHMvh1M",
  authDomain: "vue-projects-374a3.firebaseapp.com",
  projectId: "vue-projects-374a3",
  storageBucket: "vue-projects-374a3.appspot.com",
  messagingSenderId: "197646831023",
  appId: "1:197646831023:web:60695275b18b8f6dc5b35a",
};

//init firebase

const app = initializeApp(firebaseConfig);

// init firestore service

const projectFirestore = getFirestore(app);

export { projectFirestore };
