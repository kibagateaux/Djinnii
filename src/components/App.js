import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/database';
import axios from 'axios';

import movesData from '../lib/data';
import { _formatToUnix, _durationUnix } from '../lib/helpers';

import Djinn from './Djinn';
import ActivityBar from './ActivityBar';
import DailyProfile from './DailyProfile';

export default class App extends Component {
  constructor(props) {
    super(props);

    const storylineSegments = movesData.storylines[0].segments;

    this.state = {
      storylines: [...movesData.storylines],


      // deprecated, moving to DailyProfile
      segments: storylineSegments,
      activeActivity: null,
      stats: {
        str: 4,
        int: 8,
        stm: 6,
        agy: 9
      }
    };

    this.activities = this.createActivitiesList(storylineSegments);
    // console.log('struct act', this.activities);
    
    // Bindings
    this.setActiveActivity = this.setActiveActivity.bind(this);
    // this.updateStats = this.updateStats.bind(this); 
    // this.adjustStatsForActivity = this.adjustStatsForActivity.bind(this);

    // firebase.initializeApp({
    //   apiKey: "AIzaSyDN6ZpmqNKMU4sWDG12ypR5Xonu8J5KnYs",
    //   authDomain: "djinn-64564.firebaseapp.com",
    //   databaseURL: "https://djinn-64564.firebaseio.com",
    //   projectId: "djinn-64564",
    //   storageBucket: "djinn-64564.appspot.com",
    //   messagingSenderId: "831855461146"
    // });

}

  setActiveActivity(unixTime) {
    //setsState to user selected activity to update animations 
    console.log('actv', unixTime, this.activities[unixTime]);
    if(unixTime) return this.setState({ activeActivity: this.activities[unixTime] });
  }

/* 
  * Not using. Not deprecated. Not needed atm
  
    vizDailySummaries(){
    // take activities for each day
    // show total time of activity as portion of day.
      // not chronological or segmented yet
    // color based on activity and height = calories burned
    const sums = [...movesData.summaries];
    return(
      sums
       .filter(sum => Boolean(sum)) //removes null summaries
       .map((sum, i)  => {
        const activitiesForDay = sum.map(({ activity, duration, calories }) => ({ activity, duration, calories }));
        return <ActivityBar key={i} i={i} activities={activitiesForDay}/>
      })
    )
  }

*/

  createActivitiesList(segs){
    //returns object of all the days activities
    // key = unixStartTime, value = activity obj
    let activityList = {};
    segs.forEach(seg => {
      seg.activities
        ? seg.activities.forEach(act => {
          const startMs = _formatToUnix(act.startTime);
          activityList[startMs] = act
        })
        : activityList[_formatToUnix(seg.startTime)] = seg;
    });
    return activityList;
  }

  getData(){
    console.log('getData');
    const data = axios.get("https://localhost:8000/moves/any")
      .then(data => { console.log('data', data); return data; })
  }

  updateStats({ attr, val }){
    //updates one stat attr per func call
    const stats = {...this.state.stats};
    const newStat = { ...stats, [attr]: stats[attr] + val };
    this.setState({ stats: newStat });
  }

  adjustStatsForActivity(act){
    if(Array.isArray(act.activities)){
      return act.activities.forEach(act => this.adjustStatsForActivity(act));
    }
    const activityType = act.activity? act.activity : 'plc';
    const duration = _durationUnix(act.startTime, act.endTime)
    switch(activityType){
      case 'wlk':
        return this.updateStats({ attr: 'int', val: parseFloat(.02) * duration });
      case 'run':
        return this.updateStats({ attr: 'agy', val: parseFloat(.02) * duration });
      case 'cyc':
        return this.updateStats({ attr: 'stm', val: parseFloat(.02) * duration });
      case 'plc':
        return this.updateStats({ attr: 'str', val: parseFloat(-.01) * duration });
    }
  } 


  playDay(){
    this.state.segments.forEach((act, i, acts) => {
      const duration = _durationUnix(act.startTime, act.endTime) * 3;
      const func = () => {
        this.adjustStatsForActivity(act);      
        this.setActiveActivity(_formatToUnix(act.startTime)); 
      };
      setTimeout(func, duration);
    })
  }
  
  vizStorySegments(){
    const storylines = [ ...movesData.storylines ]; 
    //this is actually returning many activityBars, notfor specified day
    console.log('vizsegs', storylines);
    console.log('vizsegs', storylines[0]);
    

    
    return storylines.map(({ date, segments }) => {
      return (
        <ActivityBar 
          key={date} 
          date={date} 
          segments={segments}
          setActiveActivity={this.setActiveActivity}
        />
      )  
    })
  }

  renderDailyProfiles(){
    return this.state.storylines.map(story => {
      console.log('renddaly', story);
      
      return (
        <DailyProfile 
          key={story.date}
          activities={this.createActivitiesList(story.segments)}
          storyline={story}
          segments={story.segments}
          stats={{str:4,int:2,agy:5,stm:2}}
        />
      )
    })
  }
  
  render() {
    return (
      // <View>        
      //   <Djinn 
      //     activeActivity={this.state.activeActivity}
      //     stats={this.state.stats}
      //   />
      //   <View style={{margin: 100}} />
      //   <View>  
      //     { this.vizStorySegments() }
      //   </View>

      //   <TouchableOpacity onPress={() => this.playDay()}>
      //     <Text> Play Day </Text>
      //   </TouchableOpacity>
        
      // </View>
     <View>
     {this.renderDailyProfiles()}
     </View>
    )

  }
}

