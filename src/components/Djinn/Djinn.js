import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import SpriteAnimation from '@containers/SpriteAnimation';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

import axios from 'axios';

export default (props) => {
  const testingFunc = () => {
    const a = axios.get("https://lcnyvgmw79.execute-api.us-east-1.amazonaws.com/dev/init-auth");
    const b = a.then(b => b).catch(b => b);
    console.log('test moves rt', a, b);
  }
  return (
    <View style={styles.container}>
      <SpriteAnimation />
      <StatsTable />
        <TouchableOpacity 
          style={styles.switchButton}
          onPress={testingFunc}
        >
          <Text> 
            {props.localMode ? 'Enter SvöldLånd' : 'Enter DübLånd'}
          </Text>
        </TouchableOpacity>
    </View>
  )
}