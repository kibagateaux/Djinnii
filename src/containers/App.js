import App from '@components/App/App';
import {updateStats, updateLocalStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  stats: state.stats,
  activities: state.activities.activities,
  activeActivity: state.activities.activeActivity,
  storylines: state.activities.storylines,
  localStats: state.stats.localStats,
  localMode : state.user.localMode
});

const mapDispatchToProps = (dispatch) => ({
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity)),
  updateLocalStats: (statsMap) => dispatch(updateLocalStats(statsMap)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);