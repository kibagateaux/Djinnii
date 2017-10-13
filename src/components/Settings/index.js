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

  _getSettingsList = () => ([
    {
      label: "Integrations",
      onPress: () => this.props.navigateToIntegrations({})
    },
    {
      label: "Moves",
      onPress: () => this.props.navigateToOAuth({
        appName:"Moves",
        description: "Helps us track movement and exercise like running and biking",
      })
    }
  ])

  render() {
    return (
      <View style={styles.settingsContainer}>
        <CardList cards={this._getSettingsList()} style={styles.cardStyle}/>
      </View>    
    );
  }
}