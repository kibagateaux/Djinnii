import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SpriteAnimation from './SpriteAnimation';
import { height, width } from '../lib/constants/style';

export default class Djinn extends Component {
  constructor(props){
    super(props)
  }

  renderStatsTable() {
    const stats = { ...this.props.stats };
    const statsTable =  () => Object.keys(stats).map(key => {
      return (
        <Text 
          key={key}
          style={{
            flexDirection: 'column', 
            justifyContent: 'space-around', 
            width: '100%'
          }}
        >
          {key}  :  {stats[key]} 
        </Text>
      )
    });
    return (
      <View 
        style={{
          margin: width/10

        }}
      >
        { statsTable() }
      </View>
    )
  }

  render() {
    return (
      <View 
        style={{
          height: height/4, 
          width: width, 
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: width/20
        }}
      >
        <SpriteAnimation 
          activity={this.props.activeActivity
            ? this.props.activeActivity.activity
            : "idl" } 
            style={{
            }}
        />
        { this.renderStatsTable() }
      </View>
    )
  }
}