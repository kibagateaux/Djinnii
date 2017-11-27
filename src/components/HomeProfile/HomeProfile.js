import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Avatar from '@containers/Avatar';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <Avatar />
      <StatsTable />
        <TouchableOpacity 
          style={styles.switchButton}
          onPress={props.switchLocalGameMode}
        >
          <Text> 
            {props.localMode ? 'Enter SvöldLånd' : 'Enter DübLånd'}
          </Text>
        </TouchableOpacity>
    </View>
  )
}