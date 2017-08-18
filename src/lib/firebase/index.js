import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyDN6ZpmqNKMU4sWDG12ypR5Xonu8J5KnYs",
  authDomain: "djinn-64564.firebaseapp.com",
  databaseURL: "https://djinn-64564.firebaseio.com",
  projectId: "djinn-64564",
  storageBucket: "djinn-64564.appspot.com",
  messagingSenderId: "831855461146"
});

export const signInAnon = () => firebase.auth().signInAnonymously()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

