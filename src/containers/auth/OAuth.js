import OAuth from '@components/auth/OAuth/index.js';
import {connect} from 'react-redux';
import {saveCognitoProfile} from '@actions/auth/saveCognitoProfile';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP} from '@constants/routes';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  saveCognitoProfile: (profile) => dispatch(saveCognitoProfile(profile)),
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'}))
});

export default connect(null, mapDispatchToProps)(OAuth)