import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import {Auth, WithAuth} from '@lib/Auth';
import styles from './styles';

// default background, centered card with app name,
// and which permissions and why the app will help.
class OAuth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      appName,
      appImage,
      description,
      onMainButtonPress,
      onAltButtonPress
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={appImage} />
          <Text style={styles.appName}> {appName} </Text>
          <Text> {description} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            buttonText="Install App"
            primaryColor
            onPress={onMainButtonPress}
          />
          <ActionButton
            buttonText="See Permissions"
            onPress={onAltButtonPress}
          />
        </View>
        
      </View>
    );
  }
}

export default WithAuth(OAuth);

