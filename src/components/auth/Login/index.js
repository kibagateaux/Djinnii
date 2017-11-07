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

import MFAPrompt from '@lib/Auth/MFAPrompt';
import WithAuth from '@lib/Auth/WithAuth';
import styles, {inputStyles} from './styles';


class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showActivityIndicator: false,
      username: '',
      password: '',
      showMFAPrompt: false,
      errorMessage: null,
    };

    this.baseState = this.state;
  }

   doLogin = async () => {
    const {auth} = this.props;
    const {username, password} = this.state;
    const awsPhoneNumber = '+1' + username
    let showMFAPrompt = false;
    let session = null;
    attemptLogin = new Promise((resolve, reject) => {
      auth.handleSignIn(awsPhoneNumber, password, auth.loginCallbackFactory({
        onSuccess(result) {
          console.log('loginCallbacks.onSuccess', result);
          session = result;
          resolve(session);
        },
        onFailure(exception) {
          console.log('loginCallbacks.onFailure', exception);
          reject(exception);
        },
        newPasswordRequired(data) {
          console.log('loginCallbacks.newPasswordRequired', data);
          reject('newPasswordRequired');
        },
        mfaRequired(challengeName, challengeParameters) {
          console.log('loginCallbacks.mfaRequired', challengeName, challengeParameters);
          resolve({showMFAPrompt: true});
        },
      }, this));
    })
    attemptLogin
    .then((session) => {
      // session.showMFAPrompt && 
      console.log('login succ sess', session);
      this.setState({
        session,
        showMFAPrompt,
        showActivityIndicator: false,
        errorMessage: null
      });
      this.props.navigateToHome();
      this.props.saveCognitoProfile();
    })
    .catch((err) => {
     console.log('login err', err)
      const errorMessage = err.invalidCredentialsMessage || err.message || err
      this.setState({errorMessage, showActivityIndicator: false})
    });
  }

  handleLogInClick = (e) => {
    this.setState({...this.baseState, showActivityIndicator: true});
    this.doLogin();
  }

  handleMFAValidate = async (code) => {
    const {auth } = this.props;

    try {
      const session = await new Promise((resolve, reject) => {
        auth.sendMFAVerificationCode(code, {
          onFailure(err) {
            reject(err);
          },
          onSuccess(result) {
            resolve(result);
          },
        }, this);
      });

      this.setState({session});
    } catch (exception) {
      return exception.message;
    }

    return true;
  }

  handleMFACancel = () => {
    this.setState({showMFAPrompt: false});
  }

  handleMFASuccess = () => {
    this.setState({
      showMFAPrompt: false,
    }, () => {
      this.onLogIn();
    });
  }

  render() {
    const {
      showActivityIndicator,
      errorMessage,
      showMFAPrompt,
      username,
      password
    } = this.state;
    return (
      <View style={styles.loginContainer}>
        {showMFAPrompt &&
          <MFAPrompt
            onValidate={this.handleMFAValidate}
            onCancel={this.handleMFACancel}
            onSuccess={this.handleMFASuccess}
          />} 
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
            placeholder="username"
            returnKeyType="next"
            onChangeText={(username) => this.setState({username})}
            value={username}
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


export default WithAuth(Login);