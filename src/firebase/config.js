import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDh9INWVUcTQp_UQYavbHo-VcMmJx78PHw",
	authDomain: "photo-gallery-firebase-cdbf5.firebaseapp.com",
	projectId: "photo-gallery-firebase-cdbf5",
	storageBucket: "photo-gallery-firebase-cdbf5.appspot.com",
	messagingSenderId: "723879905484",
	appId: "1:723879905484:web:084936f0a1aab39cc39a69",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
