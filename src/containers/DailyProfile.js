import DailyProfile from '@components/DailyProfile/DailyProfile';

import {setDisplayStats} from '@actions/stats';
import {setActiveActivity, setActiveSegment} from '@actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = ({stats, activities}) => {
  return ({
    stats: stats,
    activities: activities.activities,
    activeActivity: activities.activeActivity,
  });
};

const mapDispatchToProps = (dispatch) => ({
  setDisplayStats: (statsUpdate) => 
    dispatch(setDisplayStats(statsUpdate)),
  setActiveActivity: (timeStamp, uid) => {
    dispatch(setActiveActivity(timeStamp, uid))
  },
  setActiveSegment: (timeStamp, uid) => {
    dispatch(setActiveSegment(timeStamp, uid))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyProfile); 