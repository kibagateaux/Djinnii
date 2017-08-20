import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { height, width } from '@constants/style';

import SpriteAnimation from '@containers/SpriteAnimation.Container';
import StatsTable from '@containers/StatsTable.Container';
import FoodTable from '@components/FoodTable/FoodTable';
import styles from './styles';

export default class Djinn extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <SpriteAnimation />
        <StatsTable/>
      </View>
    )
  }
}