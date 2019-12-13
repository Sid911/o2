import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDvs1x8voxAXZrhtTErb9AX8r9Syfqc7G8",
    authDomain: "o2-project-261204.firebaseapp.com",
    databaseURL: "https://o2-project-261204.firebaseio.com",
    projectId: "o2-project-261204",
    storageBucket: "o2-project-261204.appspot.com",
    messagingSenderId: "1055017415808",
    appId: "1:1055017415808:web:759442dbcb5d3b75b86265",
    measurementId: "G-BZZBLM0XY7"
  };

export default function init(){
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)};
    };