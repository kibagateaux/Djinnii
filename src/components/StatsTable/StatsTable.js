import React from 'react';
import { Text, ScrollView } from 'react-native';
import { height, width } from '@lib/constants/style';
import styles from './styles';

export default ({ stats }) => {

  const statsColumn = (statCategory) => {
    // console.log('stat Clmn', statCategory);
    
    return Object.keys(statCategory).map(statRow => {
      // console.log('stat row', statRow);
      
      const stat = statCategory[statRow];
      statFloat = String.toString(stat).includes(".") ?
        /(^\d*\.\d+?)/.exec(stat) : stat
      
        // console.log('stat tabl float', statFloat);
      if(typeof statRow ==='object' || typeof statFloat === 'object') return;
      return (
        <Text style={styles.statRow} key={statRow}>
          <Text style={styles.statText}> {statRow}  : </Text> 
          <Text style={styles.statText}> {statFloat} </Text>
        </Text>
      )
    })
  };

  //deprecated when data structure normalized
  // const statsTable = () => Object.keys(stats).map((key,i) => {
  //   return (
  //     <View
  //       key={i}
  //       style={{
  //       }}> 
  //       <Text>{key}</Text>
  //       <Text> {statsColumn(stats[key])} </Text>
  //     </View>
  //   )
  // });

  return (
    <ScrollView style={styles.container}> 
      { statsColumn(stats) }
    </ScrollView>
  )
}