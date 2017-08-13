import React from 'react';
import { Text, View } from 'react-native';
import { height, width } from '../lib/constants/style';

export default ({ stats, listedStats }) => {
  /* Example stats object
  const stats = {
    charStats: {
      int, stm, agy
    }
    healthStats: {
      hyd (hydration) ~100, 
      ntr (nutrients) {
        macros:{ fat, prt, vit, min }
        social: { ????, social time?,  }
    },
    activityStats: {
      run: {
        dur, cal, 
      },
      cyc : {
        dur, cal
      }
    }

      
  } */

  const statsColumn = (statCategory) => {
    return Object.keys(statCategory).map(statRow => {
      return (
        <Text key={statRow} style={{width: 50}}>
          <Text > {statRow}  : </Text> 
          
          <Text> {(typeof statCategory[statRow] === 'object')? null :  statCategory[statRow]} </Text>
        </Text>
      )
    })
  };

  const statsTable = () => Object.keys(stats).map((key,i) => {
    return (
      <Text
        key={i}
        style={{
          flexDirection: 'row',
          width: '30%',
          alignSelf: 'auto'
        }}> 
        <Text>{key}</Text>
        <Text> {statsColumn(stats[key])} </Text>
      </Text>
    )
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 3,
        padding: 10
      }}
    > 
      { statsTable() }
    </View>
  )
}