import App from '@components/App/App';
import {
  updateStats,
  updateLocalStats,
  setDisplayStats
} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';
import {trackUserBehaviour} from '@actions/analytics/trackUserBehaviour';
import {identifyUser} from '@actions/analytics/identifyUser';
import {handleBranchRouting} from '@actions/navigation/handleBranchRouting';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {updateTokens} from '@actions/auth/updateTokens';
import {getMovesActivityStoryline} from '@actions/activities/getMovesActivityStoryline';
import {getLocalStats} from '@actions/stats/getLocalStats';

const mapStateToProps = ({stats, activities, user}) => ({
  activeActivity: activities.activeActivity,
  storylines: activities.storylines,
  lastLiveStats: stats.lastLiveStats,
  localStats: stats.localStats,
  localMode : user.localMode,
});

const mapDispatchToProps = (dispatch) => ({
  handleBranchRouting: (event) => dispatch(handleBranchRouting(event)),
  updateTokens: (id, tokens) => dispatch(updateTokens(id, tokens)),
  getMovesActivityStoryline: () => getMovesActivityStoryline(dispatch),
  identifyUser: (userData) => dispatch(identifyUser(userData)),
  navigateToLogin: () => dispatch(navigateTo('login')),
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  getLocalStats: () => dispatch(getLocalStats()),
  setDisplayStats: (statsMap) => dispatch(setDisplayStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity)),
  updateLocalStats: (statsMap) => dispatch(updateLocalStats(statsMap)),
  trackUserBehaviour: (eventData) => dispatch(trackUserBehaviour(eventData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);