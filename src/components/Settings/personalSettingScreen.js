import React, {Component} from 'react';
import {
  View,
  Linking
} from 'react-native';
import Settings from '@containers/Settings';
import styles from './styles';
import {movesAuthLink} from '@lib/helpers/movesData';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  _getSettingsList = async () => ([
    {
      label: "Integrations",
      onPress: () => this.props.navigateToIntegrations({})
    },
    {
      label: "Moves",
      onPress: () => this.props.navigateToOAuth({
        appName:"Moves",
        description: "blahb lasfb;a jafkna j",
        onMainButtonPress: () => {
          console.log('moves auth press', await movesAuthLink.then(blah => blah));
          Linking.openURL(await movesAuthLink)
        },
        onAltButtonPress: () => this.props.navigateToIntegrations()
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