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
import {getLocalStats} from '@actions/stats/getLocalStats';
import {
  LOGIN,
  INTEGRATIONS
} from '@constants/routes';

const mapStateToProps = ({stats, activities, user}) => ({
  activeActivity: activities.activeActivity,
  storylines: activities.storylines,
  lastLiveStats: stats.lastLiveStats,
  localStats: stats.localStats,
  localMode : user.localMode,
  user
});

const mapDispatchToProps = (dispatch) => ({
  handleBranchRouting: (event) => dispatch(handleBranchRouting(event)),
  updateTokens: (id, tokens) => dispatch(updateTokens(id, tokens)),
  identifyUser: (userData) => dispatch(identifyUser(userData)),
  navigateToLogin: () => dispatch(navigateTo(LOGIN)),
  navigateToIntegrations: () => dispatch(navigateTo(INTEGRATIONS)),
  updateStats: (statsMap) => dispatch(updateStats(statsMap)),
  getLocalStats: () => dispatch(getLocalStats()),
  setDisplayStats: (statsMap) => dispatch(setDisplayStats(statsMap)),
  setActiveActivity: (activity) => dispatch(setActiveActivity(activity)),
  updateLocalStats: (statsMap) => dispatch(updateLocalStats(statsMap)),
  trackUserBehaviour: (eventData) => dispatch(trackUserBehaviour(eventData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);