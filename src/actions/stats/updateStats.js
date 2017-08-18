import {UPDATE_STATS} from '../actionNames';
import firebase from 'firebase';

//need two updateStats functions
  // 1. that updates databse with new data  // this should happen with webhook on server
  // 2. that updates local app for rendering

export const updateStats = (statsUpdate, uid = 0) => {
  // send to backend to update firebase store
  firebase.database()
    .ref(`stats/${uid}`)
    .update(statsUpdate)
    .then((snapshot) => console.log('stat upd snap', snapshot));

  return {
    type: UPDATE_STATS,
    payload: statsUpdate
  }
}