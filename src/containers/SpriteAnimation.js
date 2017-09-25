
import SpriteAnimation from '@components/SpriteAnimation/SpriteAnimation';
import {updateStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  style: ownProps.style,
  activeActivity: state.activities.activeActivity
});

export default connect(mapStateToProps)(SpriteAnimation);