import Login from '@components/auth/Login';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP} from '@constants/routes';

// These are for WithAuth HoC once Reduxified
// import {
//   initAuth,
//   handleSignOut,
//   getSigninUserSession,
//   saveCognitoProfile,
//   handleSignIn
// } from '@actions/auth';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  saveCognitoProfile: (profile) => dispatch(saveCognitoProfile(profile)),
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  // initAuth: () => dispatch(initAuth()),
  // handleSignOut: () => dispatch(handleSignOut()),
  // getSigninUserSession: (callback) => dispatch(getSigninUserSession(callback)),
  // handleSignIn: () => dispatch(handleSignIn())
});

export default connect(null, mapDispatchToProps)(Login)