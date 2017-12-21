import {connect} from 'react-redux';
import LocalGame from '@components/LocalGame/LocalGame';

import {setAvatarActivity} from '@actions/activities';
import {updateLocalStats} from '@actions/stats';
import {trackUserBehaviour} from '@actions/analytics/trackUserBehaviour';

const mapStateToProps = ({user, stats}) => ({
  userId: user.userId,
  anonymousId: user.anonymousId,
  localStats: stats.localStats
});

const mapDispatchToProps = (dispatch) => ({
  updateLocalStats: (stats) => dispatch(updateLocalStats(stats)),
  trackUserBehaviour: (eventData) => dispatch(trackUserBehaviour(eventData)),
  setAvatarActivity: (activity) => dispatch(setAvatarActivity(activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalGame);