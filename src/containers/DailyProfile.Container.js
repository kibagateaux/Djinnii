import DailyProfile from '../components/DailyProfile';
import {updateStats} from '../actions/stats';
import {setActiveActivity} from '../actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = ({stats, activities}) => {
  return ({
    stats: stats,
    activities: activities.activities,
    activeActivity: activities.activeActivity,
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyProfile);