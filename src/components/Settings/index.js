import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import CardList from '@components/common/Cards/CardList';

import styles from './styles';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const {cards, cardStyle} = this.props;
    return (
      <View style={styles.settingsContainer}>
        <CardList cards={cards} style={cardStyle}/>
      </View>    
    );
  }
}