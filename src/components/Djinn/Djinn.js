import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import DjinniiAnimation from '@containers/DjinniiAnimation';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <DjinniiAnimation />
      <StatsTable />
        <TouchableOpacity 
          style={styles.switchButton}
          onPress={this.props.switchLocalGameMode}
        >
          <Text> 
            {props.localMode ? 'Enter SvöldLånd' : 'Enter DübLånd'}
          </Text>
        </TouchableOpacity>
    </View>
  )
}