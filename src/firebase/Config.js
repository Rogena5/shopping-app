import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: 'AIzaSyAx-94dgBkDmgIJJp3Juncxnrty31Yl4z8',
	authDomain: 'ro-shop-f8a36.firebaseapp.com',
	projectId: 'ro-shop-f8a36',
	storageBucket: 'ro-shop-f8a36.appspot.com',
	messagingSenderId: '474523538180',
	appId: '1:474523538180:web:518fe8a02322fc55447651',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const sto = getStorage(app)
export default app;

