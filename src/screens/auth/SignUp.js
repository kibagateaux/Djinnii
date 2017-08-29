import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import {signInWithFacebook} from '@lib/firebase/auth';

export default class  extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View>
        <TouchableOpacity onPress={signInWithFacebook}>
          <Text> FB Signup </Text>
        </TouchableOpacity>
      </View>
    )
  }
}