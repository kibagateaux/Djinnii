import * as firebase from 'firebase';

export const signInAnon = (firebase) => () => 
  firebase.auth().signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });