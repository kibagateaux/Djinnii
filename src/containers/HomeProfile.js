import {connect} from 'react-redux';
import HomeProfile from '@components/HomeProfile/HomeProfile';

const mapStateToProps = (state) => ({
  localMode: state.user.localMode,  
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeProfile);