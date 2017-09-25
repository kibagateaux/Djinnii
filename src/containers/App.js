import App from '@components/App/App';
import {
  updateStats,
  updateLocalStats,
  setDisplayStats
} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = ({stats, activities, user}) => ({
  activeActivity: activities.activeActivity,
  storylines: activities.storylines,
  lastLiveStats: stats.lastLiveStats,
  localStats: stats.localStats,
  localMode : user.localMode,
});

const mapDispatchToProps = (dispatch) => ({
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  setDisplayStats: (statsMap) => dispatch(setDisplayStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity)),
  updateLocalStats: (statsMap) => dispatch(updateLocalStats(statsMap)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);