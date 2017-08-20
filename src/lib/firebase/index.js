import * as firebase from 'firebase';
import * as _database from './database';
import * as _auth from './auth';

firebase.initializeApp({
  apiKey: "AIzaSyDN6ZpmqNKMU4sWDG12ypR5Xonu8J5KnYs",
  authDomain: "djinn-64564.firebaseapp.com",
  databaseURL: "https://djinn-64564.firebaseio.com",
  projectId: "djinn-64564",
  storageBucket: "djinn-64564.appspot.com",
  messagingSenderId: "831855461146"
});

export const signInAnon = _auth.signInAnon(firebase);
export const getStatsAtTime = _database.getStatsAtTime(firebase);
export const setFirebaseStats = _database.setFirebaseStats(firebase);
