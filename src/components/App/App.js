import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import DailyProfile from '@containers/DailyProfile.Container';
import SpriteAnimation from '@containers/SpriteAnimation.Container';
import Djinn from '@containers/Djinn.Container';
import {normalizeStorylineData} from '@helpers/movesData';
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

  renderDailyProfiles(){
    return this.props.storylines.map((story,i) => {
      // key=story.date with real data
      return (
        <DailyProfile key={i} storyline={story}/>
      )
    })
  }
  
  render() {
    return (
      <View style={styles.container}> 
        <Djinn />
        <ScrollView>
          {this.renderDailyProfiles()}
        </ScrollView>
      </View>
    )

  }
}

