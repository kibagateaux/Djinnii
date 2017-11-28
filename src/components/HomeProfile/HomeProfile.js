import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Avatar from '@containers/Avatar';
import StatsTable from '@containers/StatsTable';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar />
      </View>
      <View style={styles.statsContainer}>
        <StatsTable />
      </View>
    </View>
  )
}