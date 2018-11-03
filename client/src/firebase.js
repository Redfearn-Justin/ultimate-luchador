import * as firebase from "firebase";

//encrypt config through env file

const config = {

    apiKey: "AIzaSyBtrAreWzaZXnoLfFhdd0tc1WgVMnckeWo",
    authDomain: "luchador-firebase.firebaseapp.com",
    databaseURL: "https://luchador-firebase.firebaseio.com",
    projectId: "luchador-firebase",
    storageBucket: "luchador-firebase.appspot.com",
    messagingSenderId: "294018925728"
};
    
firebase.initializeApp(config);

//if add google log in

// export const provider = new firebase.auto.GoogleAuthProvider();

//============================================================

export const auth = firebase.auth();

export const database = firebase.database();

export default firebase;
