import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { height, width } from '../lib/constants/style';

import SpriteAnimation from './SpriteAnimation';
import StatsTable from './StatsTable';
import FoodTable from './FoodTable';

export default class Djinn extends Component {
  render() {
    const { activeActivity, stats, updateStats } = this.props;
    
    return (
      <View 
        style={{
          height: height/4, 
          width: width, 
          margin: width/20
        }}
      >
        <StatsTable stats={stats} />
      </View>
    )
  }
}