import Login from '@components/auth/Login';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP} from '@constants/routes';
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'}))
});

export default connect(null, mapDispatchToProps)(Login)