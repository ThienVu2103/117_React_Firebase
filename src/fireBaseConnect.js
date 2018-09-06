import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC-BjWObkDoX1Gg71NjPSPwAp4Ao7dPhp4",
    authDomain: "notereact-c8e9a.firebaseapp.com",
    databaseURL: "https://notereact-c8e9a.firebaseio.com",
    projectId: "notereact-c8e9a",
    storageBucket: "notereact-c8e9a.appspot.com",
    messagingSenderId: "68677087363"
};

export const firebaseConnect = firebase.initializeApp(config);

// GET VALUE
var data = firebase.database().ref('/DataForNote/'); // referance to DB in firebase
data.once('value').then((snapshot) => { 
    // console.log(snapshot.val())
})

// EDIT VALUE
var data = firebase.database().ref('/DataForNote/note2');
data.set({
    id: 1,
    title: "09-09-1199"
})

