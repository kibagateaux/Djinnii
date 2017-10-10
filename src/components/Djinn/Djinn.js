import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import DjinniiAnimation from '@containers/DjinniiAnimation';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

import axios from 'axios';
import {movesAuthInitDeepLink, movesAuthInitHttps} from '@lib/helpers/movesData';
import {fakeDynamoRequest, fakeDynamoGet} from '@lib/DynamoDB';

export default (props) => {
  const testingFunc = async () => {
    fakeDynamoRequest("blah");
    // const mob = await Linking.canOpenURL(movesAuthInitDeepLink);
    // const web = await Linking.canOpenURL(movesAuthInitHttps);
    // const movesAuthLink = mob ? movesAuthInitDeepLink : movesAuthInitHttps;
    // console.log('moves links ', mob, web, movesAuthLink);
    // Linking.openURL(movesAuthLink);
  }
  return (
    <View style={styles.container}>
      <DjinniiAnimation />
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