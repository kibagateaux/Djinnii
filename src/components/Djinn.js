import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { height, width } from '../lib/constants/style';

import SpriteAnimation from './SpriteAnimation';
import StatsTable from './StatsTable';

export default class Djinn extends Component {
  render() {
    const { activeActivity, stats } = this.props;
    return (
      <View 
        style={{
          height: height/4, 
          width: width, 
          margin: width/20
        }}
      >
        <SpriteAnimation 
          style={{
            height: height/4,
            width: width
          }}
          activity={
            activeActivity
              ? activeActivity.activity
              : "idl" 
          } 
        />
       
        <StatsTable 
          stats={{
            characterStats: stats, 
            healthStats: {
              hyrdation: '1L/3L',
              sugar: '40g/8g'
            },
            activityStats:{
              ...activeActivity
            }
          }}
        />

      </View>
    )
  }
}