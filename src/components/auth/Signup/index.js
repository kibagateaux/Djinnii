import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import {
  MKTextField,
  MKButton
} from 'react-native-material-kit';

import MFAPrompt from '@lib/Auth/MFAPrompt';
import {Auth, WithAuth} from '@lib/Auth';
import styles from './styles';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMFAPrompt: false,
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      errorMessage: '',
    };

    this.baseState = this.state;

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleMFAValidate = this.handleMFAValidate.bind(this);
    this.handleMFASuccess = this.handleMFASuccess.bind(this);
    this.handleMFACancel = this.handleMFACancel.bind(this);
    this.onPhoneSubmit = this.onPhoneSubmit.bind(this);
  }

   handleSignUp = async () => {
    this.setState({ errorMessage: '' });    
    
    const { username, password, email, phoneNumber } = this.state;
    let userConfirmed = true;
    const awsEmail = email ? {Name: 'email', Value: email} : null;
    const awsPhoneNumber = phoneNumber
      ? {Name: 'phone_number', Value: '+1' + phoneNumber}
      : null;

    const startSignup = new Promise((resolve, reject) => {
      Auth.handleNewCustomerRegistration(username, password, awsEmail, awsPhoneNumber, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        userConfirmed = !!result.userConfirmed;
        resolve();
      });
    });

    startSignup
      .then((result) => {
        this.setState(this.baseState);
        this.props.navigateToLogin();
        this.props.onSignUp();
      })
      .catch((err) => {
        console.log('err signup', err);
        this.setState({ errorMessage: err || err.message });  
      })

    this.setState({ showMFAPrompt: !userConfirmed });
  }

  async handleMFAValidate(code = '') {
    try {
      await new Promise((resolve, reject) => {
        Auth.handleSubmitVerificationCode(this.state.username, code, (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(result);
        });
      });

    } catch (exception) {
      return exception.message || exception;
    }

    return true;
  }

  handleMFACancel = () => {
    this.setState({ showMFAPrompt: false })
  }

  handleMFASuccess = () => {
    this.setState({ showMFAPrompt: false });
    this.onSignUp();
  }

  checkPhonePattern = (phone) => /\+[1-9]\d{1,14}$/.test(phone);

  onPhoneSubmit(event) {
    const isValidPhone = this.checkPhonePattern(event.nativeEvent.text);
    this.setState({ errorMessage: !isValidPhone && 'Please enter a phone number with the format +(countrycode)(number) such as +12223334444' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View>
            <Text>{this.state.errorMessage}</Text>
            <MKTextField
              editable
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Enter your Username"
              returnKeyType="next"
              ref="username"
              textInputRef="usernameInput"
              onSubmitEditing={() => { this.refs.password.refs.passwordInput.focus() }}
              value={this.state.username}
              onChangeText={username => this.setState({ username })} />
            {false && <Text>Error message</Text>}
          </View>
          <View>
            <MKTextField
              editable
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholder="Enter your Password"
              returnKeyType="next"
              ref="password"
              textInputRef="passwordInput"
              onSubmitEditing={() => { this.refs.email.refs.emailInput.focus() }}
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            >
              {false && <Text>Error message</Text>}
            </MKTextField>
          </View>
          <View>
            <MKTextField
              editable
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholder="Enter your email"
              returnKeyType="next"
              ref="email"
              textInputRef="emailInput"
              value={this.state.email}
              onChangeText={email => this.setState({ email })} />
            {false && <Text>Error message</Text>}
          </View>
          <View>
            <MKTextField
              editable
              autoCapitalize="none"
              keyboardType="phone-pad"
              underlineColorAndroid="transparent"
              placeholder="Enter your Phone Number"
              returnKeyType="next"
              ref="phone"
              textInputRef="phoneInput"
              value={this.state.phoneNumber}
              onBlur={this.onPhoneSubmit}
              onSubmitEditing={this.onPhoneSubmit}
              onChangeText={phoneNumber => this.setState({ phoneNumber })} />
            {false && <Text>Error message</Text>}
          </View>
          <TouchableHighlight onPress={this.handleSignUp}>
            <Text> SIGN UP </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.navigateToLogin}>
            <Text> LOGIN! </Text>
          </TouchableHighlight>
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
