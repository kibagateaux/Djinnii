import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { height, width } from '@lib/constants/style';

import SpriteAnimation from '@containers/SpriteAnimation.Container';
import StatsTable from '@containers/StatsTable.Container';
import FoodTable from '@components/FoodTable/FoodTable';

import styles from './styles';

export default class Djinn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spriteContainer}>
          <SpriteAnimation />
        </View>
        <View style={styles.statsContainer}>
          <StatsTable/>
        </View>
      </View>
    )
  }
}