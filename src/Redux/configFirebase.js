import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAp89ftnFZ-p3dm0lxczw00MIh1POlVqAc",
  authDomain: "o2-project-261204.firebaseapp.com",
  databaseURL: "https://o2-project-261204.firebaseio.com",
  projectId: "o2-project-261204",
  storageBucket: "o2-project-261204.appspot.com",
  messagingSenderId: "1055017415808",
  appId: "1:1055017415808:web:0d8773ca92ea5fb2b86265",
  measurementId: "G-SDG0ZMPJPL"
};

function init(){
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)};
        firebase.analytics()
        firebase.firestore()
        firebase.functions()
};

export {firebase,init}