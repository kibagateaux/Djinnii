import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import CardList from '@components/common/Cards/CardList';
import styles from './styles';

export default (props) => {
  // render default cards or is this just or styling?
  return (
    <View style={styles.settingsContainer}>
      <CardList cards={props.cards} cardStyle={props.cardStyle}/>
    </View>
  );
}