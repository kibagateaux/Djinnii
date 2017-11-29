import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  MKTextField,
  MKButton
} from 'react-native-material-kit';

import MFAPrompt from '@lib/Auth/MFAPrompt';
import Auth from '@lib/Auth';
import WithAuth from '@lib/Auth/WithAuth';


import styles from './styles';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMFAPrompt: false,
      username: '',
      password: '',
      email: null,
      phoneNumber: '',
      errorMessage: 'Sign up with just a phone number and password',
    };
    this.baseState = this.state;
  }
  
   validateFields = () => {
    const {password, phoneNumber} = this.state;
    const validPassword = password.length > 7;
    const validNumber = this.validatePhoneNumber(phoneNumber);
    console.log('val sign field', password, validPassword,  phoneNumber, validNumber);
    const numberMessage = validNumber ? '' : ' Please enter a proper US number e.g. 342-624-8971 ';
    const passwordMessage = validPassword ? '' : ' Passwords must be longer than 8 characters ';
    const errorMessage = numberMessage + passwordMessage;
    if(errorMessage.length > 0) {
      console.log('err msg', errorMessage);
      this.setState({errorMessage});
    } else {
      console.log('signup handled');
      this.handleSignUp();
    }
  };

  handleSignUp = async () => {
    this.setState({ errorMessage: '' });    
    const {password, phoneNumber} = this.state;    
    const awsPhoneNumber = '+1' + phoneNumber;
    const startSignup = new Promise((resolve, reject) => {
      Auth.handleNewCustomerRegistration(awsPhoneNumber, password, null, awsPhoneNumber, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });

    startSignup
      .then((result) => {
        this.setState({...this.baseState});
        console.log('onsignup', this.props.onSignUp);
        this.props.navigateToLogin();
        // TODO auto sign in
      })
      .catch((err) => {
        console.log('err signup', err);
        this.setState({errorMessage: err.message});  
      })
  }

  handleMFAValidate = async (code = '') => {
    try {
      await new Promise((resolve, reject) => {
        Auth.handleSubmitVerificationCode(this.state.username, code, (err, result) => {
          if (err) {
          console.log('mfa err', err);
          reject(err);
            return;
          }
          console.log('mfa success', result);
          resolve(result);
        });
      });

    } catch (exception) {
      return exception.message || exception;
    }

    return true;
  }

  handleMFACancel = () => {
    this.setState({showMFAPrompt: false})
  }

  handleMFASuccess = () => {
    this.setState({showMFAPrompt: false});
    this.props.navigateToLogin();
  }

  validatePhoneNumber = (phone) => /\d{10}$/.test(phone);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            <MKTextField
              style={styles.inputStyles}
              keyboardType="phone-pad"
              underlineColorAndroid="purple"
              placeholder="Enter your Phone Number"
              returnKeyType="next"
              value={this.state.phoneNumber}
              onChangeText={phoneNumber => this.setState({ phoneNumber })} />
            <MKTextField
              style={styles.inputStyles}
              underlineColorAndroid="purple"
              placeholder="Enter your Password"
              returnKeyType="next"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
            <TouchableOpacity style={styles.signupButton} onPress={this.validateFields}>
              <Text> SIGNUP </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={this.props.navigateToLogin}>
              <Text> Go to login </Text>
            </TouchableOpacity>
          {this.state.showMFAPrompt &&
            <MFAPrompt
              onValidate={this.handleMFAValidate}
              onCancel={this.handleMFACancel}
              onSuccess={this.handleMFASuccess}
            />}
        </View>
      </View>
    );
  }
}
export default WithAuth(SignUp);
