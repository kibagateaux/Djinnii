import {connect} from 'react-redux';
import StatsTable from '@components/StatsTable/StatsTable';

const mapStateToProps = ({stats}) => {
  return {activeStats: stats.activeStats};
}

export default connect(mapStateToProps)(StatsTable);