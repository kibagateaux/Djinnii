import React, {Component} from 'react';
import {ScrollView, View, TouchableOpacity, Linking, AsyncStorage , Image} from 'react-native';
import axios from 'axios';
import branch from 'react-native-branch';
// import {_handleBranchRouting} from '@lib/analytics';


import DailyProfile from '@containers/DailyProfile';
import HomeProfile from '@containers/HomeProfile';
import ActionButton from '@components/common/ActionButton/ActionButton';

import {normalizeStorylineData} from '@helpers/movesData';
import {getLocalStats, localStatsAfterActivity} from '@helpers/stats';
import {navigateTo} from '@actions/navigation/navigateTo';
import {viewLocalStorage} from '@helpers/asyncStorage';
import {Auth} from '@lib/Auth';
import {updateStats} from '@actions/stats';
import {movesAuthInitDeepLink, movesAuthInitHttps} from '@lib/helpers/movesData';


import styles from './styles';

export default class App extends Component {
  constructor(props){
    super(props);
    // branch.subscribe(props.handleBranchRouting);
    this.branchUnsubcription = branch.subscribe(({params, error}) => {
      console.log('branch params err', params, error);
      const url = params['+url'] || params['+non_branch_link'];
      const userId = '0';
      console.log('handle routes', url);
      if(params['+non_branch_link']) {
          console.log('auth', resource, userId, access_token); 
        const tokenRegex = /.*access_token=(\w*).*refresh_token=(\w*).*/;
        const tokens = tokenRegex.exec(url);
        const access_token = tokens ? tokens[1] : 'a';
        const refresh_token = tokens ? tokens[2] : 'b';    
        const [_, __, service, resource, id] = resources = ((params['+non_branch_link'] && params['+non_branch_link'].split('/')) || []);
        console.log('non branch link', service + '/' + resource + '/' + id);
        if(service === 'auth'){
          const tokenObj = {
            [resource]: {
              access_token,
              refresh_token
            }
          };
          console.log('auth', resources, userId, tokenObj);          
          props.updateTokens(userId, tokenObj);
        }
      }
      
    });

    props.identifyUser({
      userId: '0'
    });
  }

  // initializes UI for selected game mode
  async componentWillMount(e) {
    console.log('com did mount', e);
    const {
      updateLocalStats,
      setDisplayStats,
      localStats,
      lastLiveStats,
      localMode,
      getMovesActivityStoryline
    } = this.props;
    const lastLocalStats = await getLocalStats();
    // instantiate local stats so not overwritten on first press. 
    updateLocalStats(lastLocalStats);
    localMode ?
      updateLocalStats(lastLocalStats) :
      setDisplayStats(lastLiveStats);
  }

  componentWillUnmount(e) {
    console.log('app unmount', e);
    (this.branchUnsubcription && this.branchUnsubcription());    
    
  }

  shouldComponentUpdate(nextProps) {
    const modeChange = this.props.localMode !== nextProps.localMode;
    const newStats = (
      this.props.localStats !== nextProps.localStats || 
      this.props.lastLiveStats !== nextProps.lastLiveStats
    );
    console.log('app shld upd', modeChange || newStats, modeChange, newStats);
    return (modeChange || newStats) ? true : false;
  }

  componentDidMount(){
    // this._updateMovesData();
  }

  _updateMovesData = async () => {
    // for renewing access token until coded
    // const res = await axios.get("https://localhost:3000/");
    const storylines = await this._getMovesData();
    // const res = await axios.post('https://us-central1-djinn-64564.cloudfunctions.net/addMovesStoryline', {
    //   uid: 0,
    //   storylines
    // })

    // console.log('auth url', res.data);
    // Linking.openURL(res.data);
  }

  _getMovesData = async () => {
    const data = await axios.get("https://localhost:5000/djinn-64564/us-central1/getNewStorysFromMoves");
    console.log('_getMovesData', data);
    return data;
  }

  _renderDailyProfiles = () => {
    const profiles = this.props.storylines.map((story,i) => {
      // key=story.date with real data
      return (
        <DailyProfile key={i} storyline={story}/>
      )
    });
  return (
    <ScrollView>
      {profiles}
    </ScrollView>
  )
  }



  _renderLocalGame = () => {
    const {
      updateLocalStats,
      localStats,
      trackUserBehaviour,
      getMovesActivityStoryline
    } = this.props;

    const onActivityPress = (activity) => {
      userId = '0';
      const eventData = {
        userId,
        event: 'Action Pressed',
        properties: {
          name: activity,
          stats: localStats,
        }
      };
      return () => {
        trackUserBehaviour(eventData);      
        updateLocalStats(localStatsAfterActivity(activity, localStats))
      }
    }
    const actions= [
      {action: 'Run',
      onPress: getMovesActivityStoryline},
      //  onPress: onPress(''),
      {action: 'Dance',
       onPress: onActivityPress('dance')},
      {action: 'Sleep',
       icon: "😴💤",
       onPress: onActivityPress('sleep')},
      {action: 'Eat',
       onPress: onActivityPress('eat')}
    ];
    const actionButtons = actions.map(({action, onPress, icon}) => 
      <ActionButton
        key={action}
        style={styles.localActionButtons}
        buttonText={action}
        onPress={onPress}
        primaryColor
        icon={icon}
        Icon={<Image />}
      />)
    
    return (
      <ScrollView horizontal style={styles.localGameContainer}>
        <View style={styles.localActionButtonContainer}>
          {actionButtons}
        </View>
      </ScrollView>
    )
  }

  _renderLowerPanel = () =>
    this.props.localMode ?
      this._renderLocalGame() :
      this._renderDailyProfiles();
  
  render() {
    return (
      <View style={styles.container}> 
        <HomeProfile />
        {this._renderLowerPanel()}
      </View>
    )

  }
}

