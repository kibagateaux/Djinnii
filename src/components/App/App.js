import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

import DailyProfile from '@containers/DailyProfile';
import SpriteAnimation from '@containers/SpriteAnimation';
import Djinn from '@containers/Djinn';
import ActionButton from '@components/common/ActionButton';

import {normalizeStorylineData} from '@helpers/movesData';
import {localStatsAfterActivity} from '@helpers/stats';

import styles from './styles';

export default class App extends Component {
  constructor(props){
    super(props);
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
    return this.props.storylines.map((story,i) => {
      // key=story.date with real data
      return (
        <DailyProfile key={i} storyline={story}/>
      )
    })
  }

  _renderLocalGame = () => {
    const {updateLocalStats, localStats} = this.props;
    console.log('rend local', localStats);
    const actions= [
      {action: 'Dance',
       onPress: () => (updateLocalStats(localStatsAfterActivity('dance', localStats)))},
      {action: 'Run',
       onPress: () => (updateLocalStats(localStatsAfterActivity('run', localStats)))},
      {action: 'Sleep',
       onPress: () => (updateLocalStats(localStatsAfterActivity('sleep', localStats)))},
      {action: 'Eat',
       onPress: () => (updateLocalStats(localStatsAfterActivity('eat', localStats)))},
    ];

    return actions.map(({action, onPress}) => 
      <ActionButton key={action} buttonText={action} onPress={onPress} />)
  }

  _renderDjinniiPanel = () => {
    const {localMode} = this.props;
    console.log('app local mode?', localMode)
    return localMode ? this._renderLocalGame() : this._renderDailyProfiles();
  }
  
  render() {
    return (
      <View style={styles.container}> 
        <Djinn />
        <ScrollView>
          {this._renderDjinniiPanel()}
        </ScrollView>
      </View>
    )

  }
}

