import * as firebase from 'firebase';
firebase.auth().useDeviceLanguage();

export const signInAnon = (firebase) => () => 
  firebase.auth().signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

export const FBAuthProvider = new firebase.auth.FacebookAuthProvider();
FBAuthProvider.addScope('public_profile');
FBAuthProvider.addScope('user_location');
FBAuthProvider.addScope('user_birthday');
FBAuthProvider.addScope('user_actions.fitness');

export const signInWithFacebook = async () => {
  try {
    await firebase.auth().signInWithRedirect(FBAuthProvider);
    const token = result.credential.accessToken;
    const user = result.user;

  }
  catch (error) {
    console.log('error with fb redirect', error);
    
  }
};