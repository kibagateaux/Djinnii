import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import {Linking} from 'react-native';
import CardList from '@components/common/Cards/CardList';
import styles from './styles';
import {movesAuthLink} from '@lib/helpers/movesData';

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
        description: "blahb lasfb;a jafkna j",
        onMainButtonPress: () => Linking.openURL(movesAuthLink),
        onAltButtonPress: () => this.props.navigateToIntegrations()
      })
    }
  ]);

  render() {
    return (
      <View style={styles.settingsContainer}>
        <CardList cards={this._getSettingsList()} style={styles.cardStyle}/>
      </View>
    );
  }
}