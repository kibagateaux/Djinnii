import React, {Component} from 'react';
import {
  View,
  Linking
} from 'react-native';
import Settings from '@containers/Settings';

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
        onMainButtonPress: () => Linking.openURL("moves://"),
        onAltButtonPress: this.props.navigateToIntegrations
      })
    }
  ])
  

  

  render() {
    const {fields} = this.props;
    return (
      <Settings
        cardStyle={styles.cardStyle}
        cards={this._getSettingsList()}
      />
    );
  }
}