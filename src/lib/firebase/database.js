// import * as firebase from 'firebase';
// const db = firebase.database();

export const setFirebaseStats = (firebase) => (stats, uid) => {
  const time = Object.keys(stats)[0];
  return baseAPI(firebase, `stats/${uid}/${time}`, 'SET', stats[time]);
}

export const getStatsAtTime = (firebase) => (uid, time) => {
  return baseAPI(firebase, `stats/${uid}/${time}`, 'GET');
}

const baseAPI = (firebase, path, method, payload) => {
  if(!firebase) throw new Error("Firebase instance must be passed to base api function as first parameter");

  const ref = firebase.database().ref(path)
  const methodCall = getMethodForVerb(method, ref);
  
  return payload ? methodCall(payload) : methodCall();
}

const getMethodForVerb = (method, ref) => {
  switch(method){
    case 'GET':
      return () => ref.once('value');
    case 'SET':
      return (data) => res.set(data)
    default:
  }
}