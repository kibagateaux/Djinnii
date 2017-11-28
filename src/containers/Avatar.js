
import {connect} from 'react-redux';

import Avatar from '@components/Avatar/Avatar';

import {updateStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {updateLocalGameMode} from '@actions/user';



const mapStateToProps = (state, ownProps) => ({
  style: ownProps.style,
  activeActivity: state.activities.activeActivity,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocalGameMode: () => dispatch(updateLocalGameMode())
})
export default connect(mapStateToProps)(Avatar);