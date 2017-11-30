import Login from '@components/auth/Login/Login';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP} from '@constants/routes';
import {signInUser} from '@actions/auth';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  signInUser: (userInfo) => dispatch(signInUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login)