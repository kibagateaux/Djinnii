import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  MKTextField,
  MKButton
} from 'react-native-material-kit';

import {Auth} from 'aws-amplify-react-native';
import styles from './styles';
import {checkPhoneNumberLength} from '@helpers/validation';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMFAPrompt: false,
      username: '',
      password: '',
      email: null,
      phoneNumber: '',
      errorMessage: 'Sign up with just your phone number and a password',
    };
    this.baseState = this.state;
  }
  
   validateFields = () => {
    const {password, phoneNumber} = this.state;
    const validPassword = password.length > 7;
    const validNumber = checkPhoneNumberLength(phoneNumber);
    console.log('val sign field', password, validPassword,  phoneNumber, validNumber);
    const numberMessage = validNumber ? '' : ' Please enter a proper US number e.g. 342-624-8971 ';
    const passwordMessage = validPassword ? '' : ' Passwords must be longer than 8 characters ';
    const errorMessage = numberMessage + passwordMessage;
    if(errorMessage.length > 0) {
      console.log('err msg', errorMessage);
      this.setState({errorMessage});
    } else {
      this.handleSignUp();
    }
  };

  signUpUser(username, password, email, number) {
    Auth.signUp(username, password, email, number)
      .then((user) => {
        console.log("signup user", user);
      })
      .catch((error) => {
        console.log("signup error", error)
      })
  }

  handleSignUp = async () => {
    this.setState({errorMessage: ''});
    const {password, phoneNumber} = this.state;
    const awsPhoneNumber = '+1' + phoneNumber;
    this.signUpUser(phoneNumber, password, null, awsPhoneNumber);
  }

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
              onChangeText={phoneNumber => this.setState({phoneNumber})} />
            <MKTextField
              style={styles.inputStyles}
              underlineColorAndroid="purple"
              placeholder="Enter your Password"
              returnKeyType="next"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </View>
            <TouchableOpacity style={styles.signupButton} onPress={this.validateFields}>
              <Text> SIGNUP </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={this.props.navigateToLogin}>
              <Text> Go to login </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
