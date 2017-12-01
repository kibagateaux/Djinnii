import {connect} from 'react-redux';
import DailyProfileList from '@components/DailyProfileList/DailyProfileList';

import {fetchActivities} from "@actions/activities";

const mapStateToProps = (state) => ({
  user: state.user,
  days: state.days,
  activities: state.activities
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: (userId) => dispatch(fetchActivities(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyProfileList);
