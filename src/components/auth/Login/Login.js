import React, {PureComponent} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
} from 'react-native-elements';

import {Auth} from 'aws-amplify-react-native';
import {checkPhoneNumberLength} from '@helpers/validation';

import styles from './styles';

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
      .then(async (user) => {
        this.setState({showActivityIndicator: false})
        const {
          signInUser,
          navigateToHome,
          aliasAnonToUser,
          anonymousId
        } = this.props;
        signInUser({username: user.username});
        aliasAnonToUser(anonymousId, user.username);
        navigateToHome();
      })
      .catch((error) => {
        console.log('error on signin', error);
        this.setState({errorMessage: "Invalid login - " + error});
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
          <FormLabel> Phone Number </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            selectionColor={styles.signInButton.backgroundColor}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="212-836-0297"
            returnKeyType="next"
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            value={phoneNumber}
          />
          <FormLabel> Password </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            selectionColor={styles.signInButton.backgroundColor}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType="next"
            onChangeText={(password) => this.setState({password})}            
            value={password}
          />
          
          <Button
            raised
            containerViewStyle={styles.signInButton}
            buttonStyle={styles.signInButton}
            onPress={this.handleLogInClick}
            title="SIGN IN"
          />
          
          <View style={styles.altActionsContainer}>
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.props.navigateToHome}
              title="Forgot Password"
            />
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.props.navigateToSignup}
              title="Signup"
            />
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.props.navigateToHome}
              title="Skip Login"
            />
          </View>
        </View>
      </View>
    );
  }
}