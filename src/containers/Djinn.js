import {connect} from 'react-redux';
import Djinn from '@components/Djinn/Djinn';
import {switchLocalGameMode} from '@actions/user';

const mapStateToProps = (state) => ({
  localMode: state.user.localMode,  
})

const mapDispatchToProps = (dispatch) => ({
  switchLocalGameMode: (bool) => dispatch(switchLocalGameMode(bool))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Djinn);