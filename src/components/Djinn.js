import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { height, width } from '../lib/constants/style';

import SpriteAnimation from './SpriteAnimation';
import StatsTable from './StatsTable';

export default class Djinn extends Component {
  render() {
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
          activity={this.props.activeActivity
            ? this.props.activeActivity.activity
            : "idl" } 
            style={{
            }}
        />
       
        <StatsTable 
          
          stats={{char:this.props.stats}}
        />

      </View>
    )
  }
}