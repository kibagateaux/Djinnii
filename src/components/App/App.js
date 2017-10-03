import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Linking, AsyncStorage , Image} from 'react-native';
import axios from 'axios';

import DailyProfile from '@containers/DailyProfile';
import Djinn from '@containers/Djinn';
import ActionButton from '@components/common/ActionButton/ActionButton';

import {normalizeStorylineData} from '@helpers/movesData';
import {getLocalStats, localStatsAfterActivity} from '@helpers/stats';

import {navigateTo} from '@actions/navigation/navigateTo';
import {viewLocalStorage} from '@helpers/asyncStorage';
import {Auth} from '@lib/Auth';
import {updateStats} from '@actions/stats';

import styles from './styles';

export default class App extends Component {
  constructor(props){
    super(props);
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
      {action: 'Login',
      onPress: () => this.props.dispatch(navigateTo('login'))},
      //  onPress: () => (updateLocalStats(localStatsAfterActivity('dance', localStats)))},
      {action: 'User',
       onPress: () => (console.log('current user', Auth.getCurrentUser()))},
      {action: 'Sleep',
        icon: "😴💤",
       onPress: () => (updateLocalStats(localStatsAfterActivity('sleep', localStats)))},
      {action: 'Local Data',
       onPress: () => {
         AsyncStorage.getItem('COGNITO_USER_PROFILE')
          .then((data) => {
            updateStats('3b844f5f-fccb-4783-b009-82352b782a4c')
          })
        }
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
        <Djinn />
        {this._renderLowerPanel()}
      </View>
    )

  }
}

