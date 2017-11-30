import React, {PureComponent} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity
} from 'react-native';
import {
  MKTextField,
  MKButton,
} from 'react-native-material-kit';

import {Auth} from 'aws-amplify-react-native';
import {checkPhoneNumberLength} from '@helpers/validation';

import styles, {inputStyles} from './styles';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showActivityIndicator: false,
      phoneNumber: null,
      password: null,
      showMFAPrompt: false,
      errorMessage: null,
    };

    this.baseState = this.state;
  }

  doLogin() {
    const {phoneNumber, password} = this.state;
    Auth.signIn(phoneNumber, password)
      .then(async ({username}) => {
        this.setState({showActivityIndicator: false})
        const {signInUser, navigateToHome} = this.props;
        signInUser({username});
        navigateToHome();
      })
      .catch((error) => {
        console.log('error on signin', error);
        this.setState({errorMessage: "Invalid login, please try again. We believe in you!"});
        this.setState({showActivityIndicator: false});
      })
  };

  handleLogInClick = (e) => {
    this.setState({...this.baseState, showActivityIndicator: true});
    this.doLogin();
  }

  render() {
    const {
      showActivityIndicator,
      errorMessage,
      showMFAPrompt,
      phoneNumber,
      password
    } = this.state;
    return (
      <View style={styles.loginContainer}>
        <Modal
          visible={showActivityIndicator}
          onRequestClose={() => null}
        >
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
          />
        </Modal>
        <View style={styles.formContainer}>
          {errorMessage && <Text style={styles.validationText}> {errorMessage} </Text>}

          <MKTextField
            {...inputStyles}
            selectionColor={'purple'}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="212-836-0297"
            returnKeyType="next"
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            value={phoneNumber}
          />
          <MKTextField
            {...inputStyles}
            selectionColor={'purple'}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType="next"
            onChangeText={(password) => this.setState({password})}            
            value={password}
          />
          
          <TouchableOpacity
            style={styles.signIn}
            onPress={this.handleLogInClick}
            activeOpacity={1}
          >
            <Text> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.navigateToHome}
          >
            <Text> Forgot your password? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.navigateToSignup}
          >
            <Text> Create Account! </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}