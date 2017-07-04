import React, { Component } from 'react';
import { ScrollView, Text, Linking, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/database';
import axios from 'axios';

import movesData from '../lib/data';
import { _formatToUnix, _durationUnix } from '../lib/helpers';

import DailyProfile from './DailyProfile';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storylines: [...movesData.storylines]
    };

    // firebase.initializeApp({
    //   apiKey: "AIzaSyDN6ZpmqNKMU4sWDG12ypR5Xonu8J5KnYs",
    //   authDomain: "djinn-64564.firebaseapp.com",
    //   databaseURL: "https://djinn-64564.firebaseio.com",
    //   projectId: "djinn-64564",
    //   storageBucket: "djinn-64564.appspot.com",
    //   messagingSenderId: "831855461146"
    // });
}

  getData(){
    console.log('getData');
    const data = axios.get("https://localhost:8000/moves/any")
      .then(data => { console.log('data', data); return data; })
  }

  normalizedData(){
    return movesData.storylines.map(day => 
      day.segments.map(seg => {
        if(seg.type === 'place' && !Array.isArray(seg.place)){
          let { lat, lon } = seg.place.location;
          console.log('normplc', seg, [lat, lon]);
          const coordinates = [ lat, lon ];
          seg.place = coordinates
        }
        return seg
      })
    )
  }
  renderDailyProfiles(){
    return this.state.storylines.map((story,i) => {
          {/*key={story.date}*/}
      return (
        <DailyProfile 
          key={i}
          storyline={story}
          segments={story.segments}
          stats={{str:4,int:2,agy:5,stm:2}}
        />
      )
    })
  }
  
  render() {
    console.log('app ren', typeof this.normalizedData());
    console.log('appren', this.normalizedData());
    return (
      <ScrollView>
        {this.renderDailyProfiles()}
      </ScrollView>
    )

  }
}

