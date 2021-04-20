import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCm9NWbX2HEhDNCXaDfUuB9z16I3Hz-Bww",
    authDomain: "little-tags-e139f.firebaseapp.com",
    databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
    projectId: "little-tags-e139f",
    storageBucket: "little-tags-e139f.appspot.com",
    messagingSenderId: "115799661387"
};

firebase.initializeApp(config);
const auth=firebase.auth();
const db=firebase.firestore();
const storage=firebase.storage();

export {auth, db, storage} ;