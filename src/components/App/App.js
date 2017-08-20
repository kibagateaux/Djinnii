import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import DailyProfile from '@containers/DailyProfile.Container';
import SpriteAnimation from '@containers/SpriteAnimation.Container';
import Djinn from '@containers/Djinn.Container';
import {normalizeStorylineData} from '@helpers/movesData';
import {signInAnon} from '@lib/firebase';
import styles from './styles';

export default class App extends Component {
  constructor(props){
    super(props);
    signInAnon();
  }

  componentDidMount(){
    // this._updateMovesData();
  }

  _updateMovesData = async () => {
    // for renewing access token until coded
    // const res = await axios.get("https://localhost:3000/");
    // console.log('auth url', res.data);
    // Linking.openURL(res.data);

    const storylines = this._getMovesData();
    console.log('recent stories', storylines);
    const data = await axios.post('https://us-central1-djinn-64564.cloudfunctions.net/addMovesStoryline', {
      uid: 0,
      storylines
    })

  }

  _getMovesData = async () => {
    console.log('_getMovesData');
    const data = await axios.get("https://localhost:3000/moves/storylines");
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
    console.log('rerender', this.props);
    
    const {activeActivity} = this.props;
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

