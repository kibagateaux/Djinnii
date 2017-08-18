import App from '@components/App/App';
import {updateStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  stats: state.stats,
  activities: state.activities.activities,
  activeActivity: state.activities.activeActivity,
  storylines: state.activities.storylines

});

const mapDispatchToProps = (dispatch) => ({
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);