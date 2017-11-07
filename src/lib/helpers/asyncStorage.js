import {AsyncStorage} from 'react-native';
export const viewLocalStorage = () => {
  const dumpRaw = () =>
    AsyncStorage.getAllKeys().then(keys => {
      console.log('all keys', keys );
      keys.reduce((result, key) => (
        AsyncStorage.getItem(key).then(value => {
          console.log('AsyncStorage: ' + key, value);
          result[key] = value;
          return result;
        })
      ), {})
    });
  dumpRaw().then(data => console.log(data));
}