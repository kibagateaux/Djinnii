import Signup from '@components/auth/Signup/Signup';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, LOGIN} from '@constants/routes';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToLogin: () => dispatch(navigateTo(LOGIN)),
  navigateToHome: () => dispatch(navigateTo(HOME))
});

export default connect(null, mapDispatchToProps)(Signup)