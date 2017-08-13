import {connect} from 'react-redux';
import StatsTable from '../components/StatsTable';

const mapStateToProps = ({stats}) => {
  return {stats};
}

export default connect(mapStateToProps)(StatsTable);