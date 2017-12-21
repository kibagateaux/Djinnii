import OAuth from '@components/auth/OAuth/OAuth';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP, LOGIN, OAUTH} from '@constants/routes';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  navigateToLogin: (options) => dispatch(
    navigateTo(LOGIN, {nextScreenProps: options})),
});

export default connect(null, mapDispatchToProps)(OAuth)