
import {connect} from 'react-redux';

import Avatar from '@components/Avatar/Avatar';

import {updateStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {updateLocalGameMode} from '@actions/user';
import {navigateTo} from '@actions/navigation';
import {SETTINGS} from '@constants/routes';



const mapStateToProps = (state, ownProps) => ({
  style: ownProps.style,
  activeActivity: state.activities.activeActivity,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocalGameMode: () => dispatch(updateLocalGameMode()),
  navigateToSettings: () => dispatch(navigateTo(SETTINGS))
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);