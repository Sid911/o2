var firebaseConfig = {
    apiKey: "AIzaSyDvs1x8voxAXZrhtTErb9AX8r9Syfqc7G8",
    authDomain: "o2-project-261204.firebaseapp.com",
    databaseURL: "https://o2-project-261204.firebaseio.com",
    projectId: "o2-project-261204",
    storageBucket: "o2-project-261204.appspot.com",
    messagingSenderId: "1055017415808",
    appId: "1:1055017415808:web:759442dbcb5d3b75b86265"
  };
if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig)
}
var provider = new firebase.auth.GoogleAuthProvider();
const auth_user = firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)
  });