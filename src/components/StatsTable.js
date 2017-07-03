import React from 'react';
import { Text, View } from 'react-native';
import { height, width } from '../lib/constants/style';

export default ({ stats }) => {
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
        <Text 
          key={statRow}
          style={{
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            width: width/5
          }}
        >
          {statRow}  :  {statCategory[statRow]} 
        </Text>
      )
    })
  };

  const statsTable = () => Object.keys(stats).map((key,i) => {
    return (
      <Text
        key={i}
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}> 
        <Text> {key} </Text>
        <Text> {statsColumn(stats[key])} </Text>
      </Text>
    )
  });

  return (
    <Text
      style={{
        flexDirection: 'row'
      }}
    > 
      { statsTable() }
    </Text>
  )
}