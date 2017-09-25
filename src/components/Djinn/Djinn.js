import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import SpriteAnimation from '@containers/SpriteAnimation';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <SpriteAnimation />
      <StatsTable />
      <TouchableOpacity onPress={props.switchLocalGameMode}>
        <Text> 
          {props.localMode ? 'Enter SvöldLånd' : 'Enter DübLånd'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}