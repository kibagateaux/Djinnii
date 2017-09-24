import React from 'react';
import { Text, ScrollView } from 'react-native';
import { height, width } from '@lib/constants/style';
import styles from './styles';

export default ({ activeStats }) => {
  console.log('stat tabl', activeStats);
  
  const statsColumn = (statCategory) => {
    return Object.keys(statCategory).map(statRow => {
      const stat = statCategory[statRow];
      statFloat = String.toString(stat).includes(".") ?
        /(^\d*\.\d+?)/.exec(stat) : stat
      if(typeof statRow ==='object' || typeof statFloat === 'object') return;
      return (
        <Text style={styles.statRow} key={statRow}>
          <Text style={styles.statText}> {statRow}  : </Text> 
          <Text style={styles.statText}> {statFloat} </Text>
        </Text>
      )
    })
  };

  return (
    <ScrollView style={styles.container}> 
      { activeStats ? statsColumn(activeStats) : null }
    </ScrollView>
  )
}