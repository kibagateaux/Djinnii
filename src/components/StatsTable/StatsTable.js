import React from 'react';
import { Text, ScrollView } from 'react-native';
import { height, width } from '@lib/constants/style';

export default ({ stats }) => {

  const statsColumn = (statCategory) => {
    return Object.keys(statCategory).map(statRow => {
      // parse number to only show first 2 decimals on screen
      const stat = statCategory[statRow];

      
      return (
        <Text key={statRow}>
          <Text > {statRow}  : </Text> 
          
          <Text> {(typeof statCategory[statRow] === 'object') ? null : stat} </Text>
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
    <ScrollView
      style={{
        padding: 10
      }}
    > 
      { statsColumn(stats) }
    </ScrollView>
  )
}