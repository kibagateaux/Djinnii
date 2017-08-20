import {UPDATE_STATS} from '../actionNames';
import {_formatToUnix} from '@helpers/time';
import {setFirebaseStats} from '@lib/firebase';
import firebase from 'firebase';

//need two updateStats functions
  // 1. that updates databse with new data  // this should happen with webhook on server
  // 2. that updates local app for rendering

export const updateStats = (statsUpdate, uid, updateCloud = false) => {
  const time = Object.keys(statsUpdate)[0];
  const stats = statsUpdate[time];

  console.log('upd stats', stats);
  
  if(updateCloud) { // so unauthed users dont have to update store
    console.log('pre firebase update', statsUpdate, stats);
    firebase.database()
      .ref(`stats/${uid}/${time}`)
      .set(stats)
      .then((snapshot) => {
        console.log('post firebase update', snapshot);
      })
  }

  return {
    type: UPDATE_STATS,
    payload: stats
  }
}