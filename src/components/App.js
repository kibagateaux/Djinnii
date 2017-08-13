import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import DailyProfile from '@containers/DailyProfile.Container';
import SpriteAnimation from '@containers/SpriteAnimation.Container';

import {normalizeStorylineData} from '@helpers/movesData';

export default class App extends Component {
  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyDN6ZpmqNKMU4sWDG12ypR5Xonu8J5KnYs",
      authDomain: "djinn-64564.firebaseapp.com",
      databaseURL: "https://djinn-64564.firebaseio.com",
      projectId: "djinn-64564",
      storageBucket: "djinn-64564.appspot.com",
      messagingSenderId: "831855461146"
    })
  }

  componentDidMount(){
    this._updateMovesData();

  }

  _updateMovesData = () => {
    const recentStories = this._getMovesData();
    const db = firebase.database();
    console.log('db', db.root);
    
  }

  _getMovesData(){
    console.log('_getMovesData');
    const data = axios.get("https://localhost:8000/moves/any")
      .then(data => { console.log('data', data); return data; })
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
    const {activeActivity} = this.props;
    return (
      <View style={{flex:1}}> 
        <View style={{flex: 1}} />      
        <SpriteAnimation
            activity={activeActivity.activity}
          />
        <ScrollView style={{flex: 7}}>
          {this.renderDailyProfiles()}
        </ScrollView>
      </View>
    )

  }
}

