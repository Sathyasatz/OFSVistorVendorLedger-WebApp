import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCa2F4DY0Gj4jJPlkrPHF2StZKTRC1BIR8",
    authDomain: "visitorledger.firebaseapp.com",
    databaseURL: "https://visitorledger.firebaseio.com",
    projectId: "visitorledger",
    storageBucket: "visitorledger.appspot.com",
    messagingSenderId: "626947286714",
    appId: "1:626947286714:web:bdb6294b849fdd95"
};

firebase.initializeApp(firebaseConfig);

export default firebase;