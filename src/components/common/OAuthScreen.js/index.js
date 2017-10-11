import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ActionButton from '@components/ActionButton/ActionButton';
export default class extends Component {
  costructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const {appName, appImage, description} = this.props;
    return (
      <View>
        <View style={styles.header}>
          <Image source={appimage} />
          <Text style={styles.appName}> {appNme} </Text>
          <Text> {description} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            buttonText="Install App"
            primaryColor
          />
          <ActionButton
            buttonText="See Permissions"
          />
        </View>
        
      </View>
    )
  }
}

// default background, centered card with app name,
// and which permissions and why the app will help.
