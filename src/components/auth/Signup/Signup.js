import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
  SocialIcon,
} from 'react-native-elements';
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
      email: '',
      phoneNumber: '',
      errorMessage: 'Sign up with just your phone number and a password',
    };
    this.baseState = this.state;
  }
  
   validateFields = () => {
    const {password, phoneNumber} = this.state;
    const validPassword = password.length > 7;
    const validNumber = checkPhoneNumberLength(phoneNumber);
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
        this.props.navigateToLogin();
      })
      .catch((error) => {
        this.setState({errorMessage: error.message});
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
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          <FormLabel> 
            <Icon
              name="phone" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            /> 
            Phone Number
          </FormLabel>
          <FormInput
            style={styles.inputStyles}
            keyboardType="phone-pad"
            underlineColorAndroid="purple"
            placeholder="Enter your Phone Number"
            returnKeyType="next"
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({phoneNumber})} />
          <FormLabel>
            <Icon
              name="lock-open" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            /> 
            New Password
          </FormLabel>
          <FormInput
            style={styles.inputStyles}
            underlineColorAndroid="purple"
            placeholder="Enter your Password"
            returnKeyType="next"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          
          <View style={styles.divider}/>
          
          <Button
            containerViewStyle={styles.signupButton}
            buttonStyle={styles.signupButton}
            onPress={this.validateFields}
            title="Sign Up"
          />

          <View style={styles.divider}/>
          
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            style={styles.facebookButton}
          />

          <View style={styles.divider} />

          <Button
            containerViewStyle={styles.loginButton}
            buttonStyle={styles.loginButton}
            onPress={this.props.navigateToLogin}
            title="Login"
          />
        </View>
      </View>
    );
  }
}
