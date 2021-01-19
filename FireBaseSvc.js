import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrosjARGXEwhRLeKnmVQWSf7NrQCcnPT4",
    authDomain: "cbmmg-fe7c7.firebaseapp.com",
    databaseURL: "https://cbmmg-fe7c7.firebaseio.com",
    projectId: "cbmmg-fe7c7",
    storageBucket: "cbmmg-fe7c7.appspot.com",
    messagingSenderId: "499464763858",
    appId: "1:499464763858:web:c20ac564fa3a0cc4e9300b",
    measurementId: "G-3XBS5YLZ02"
}

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }

  login = async(user, success_callback, failed_callback) => {
    const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(success_callback, failed_callback);
  }

  createAccount = async (user, success_callback) => {
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password).then(function() {
          alert("User " + user.name + " was created successfully. Please login.");
          success_callback()
      }, function(error) {
        alert("Create account failed. Error: "+error.message);
      });
  }

  forgotPass = async (user, success) => {
    var auth = firebase.auth();
    auth.sendPasswordResetEmail(user).then(function() {
    alert("Email enviado!");
    success()
    }).catch(function(error) {
      alert(error.message);
    });
  }

}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
