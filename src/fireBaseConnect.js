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

var data = firebase.database().ref('');

data.once('value').then(function(snapshot) {
    console.log(snapshot.val())
})