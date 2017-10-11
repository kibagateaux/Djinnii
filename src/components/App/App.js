import React, {Component} from 'react';
import {ScrollView, View, TouchableOpacity, Linking, AsyncStorage , Image} from 'react-native';
import axios from 'axios';
import branch from 'react-native-branch';
import {_handleBranchRouting} from '@lib/helpers/analytics';


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

    branch.subscribe(_handleBranchRouting);

    
  }
  //initializes UI for game mode
  async componentWillMount() {
    const {
      updateLocalStats,
      setDisplayStats,
      localStats,
      lastLiveStats,
      localMode
    } = this.props;
    
    const lastLocalStats = await getLocalStats();
    // instantiate local stats so not overwritten on first press. 
    updateLocalStats(lastLocalStats);
    localMode ?
      updateLocalStats(lastLocalStats) :
      setDisplayStats(lastLiveStats);
    
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
    const {updateLocalStats, localStats} = this.props;
    const actions= [
      {action: 'Run',
      onPress: () => (updateLocalStats(localStatsAfterActivity('run', localStats)))},
      //  onPress: () => (updateLocalStats(localStatsAfterActivity('dance', localStats)))},
      {action: 'Dance',
       onPress: () => (updateLocalStats(localStatsAfterActivity('dance', localStats)))},
      {action: 'Sleep',
        icon: "😴💤",
       onPress: () => (updateLocalStats(localStatsAfterActivity('sleep', localStats)))},
      {action: 'Eat',
       onPress: () => (updateLocalStats(localStatsAfterActivity('eat', localStats)))
      }
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

