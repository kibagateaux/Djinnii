import {connect} from 'react-redux';

import DailyProfile from '@components/DailyProfile/DailyProfile';

import {setDisplayStats} from '@actions/stats';
import {setActiveActivity, setActiveSegment} from '@actions/activities';
import {fetchActivities} from '@actions/activities/fetchActivities';

const mapStateToProps = ({user, stats, activities}) => {
  return ({
    user,
    stats,
    activities: activities.activities,
    activeActivity: activities.activeActivity,
  });
};

const mapDispatchToProps = (dispatch) => ({
  setDisplayStats: (statsUpdate) => 
    dispatch(setDisplayStats(statsUpdate)),
  setActiveActivity: (timeStamp, uid) =>
    dispatch(setActiveActivity(timeStamp, uid)),
  setActiveSegment: (timeStamp, uid) =>
    dispatch(setActiveSegment(timeStamp, uid)),
  fetchActivities: (userId) =>
    dispatch(fetchActivities(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyProfile); 