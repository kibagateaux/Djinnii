import {connect} from 'react-redux';
import StatsTable from '@components/StatsTable/StatsTable';

const mapStateToProps = ({stats, user, djinn}) => {
  return {
    activeStats: stats.activeStats,
    localMode: user.localMode
  };
}

export default connect(mapStateToProps)(StatsTable);