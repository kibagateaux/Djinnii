import React from 'react';
import {
  View,
  Text,
} from 'react-native'

import * as firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  _authenticate = (provider) => {
    firebase.auth().FacebookAuthProvider
  }



  render() {
    return (
      <View>
      </View>
    )
  }
}