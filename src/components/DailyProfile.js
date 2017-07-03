import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Djinn from './Djinn';
import ActivityBar from './ActivityBar';
import { _formatToUnix, _durationUnix } from '../lib/helpers';

export default class DailyProfile extends Component {
  constructor(props) {
   super(props);
    this.state = {
      segments: this.props.storyline.segments,
      activeActivity: null,
      stats: this.props.stats
    };
    //not part of state because these should not be changing and coming from API anyways
    this.activities = this.createActivitiesList(this.state.segments);
    
    this.setActiveActivity = this.setActiveActivity.bind(this);  
  }

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


  setActiveActivity(unixTime) {
    //setsState to user selected activity to update animations 
    console.log('actv', unixTime, this.activities[unixTime]);
    if(unixTime) return this.setState({ activeActivity: this.activities[unixTime] });
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
    //this is actually returning many activityBars, notfor specified day
    const { segments, date } = this.props.storyline;
    return (
      <ActivityBar 
        key={date} 
        date={date} 
        segments={segments}
        setActiveActivity={this.setActiveActivity}
      />
    )
  }

  render() {
    return (
      <View>        

        <Djinn 
          activeActivity={this.state.activeActivity}
          stats={this.state.stats}
        />

        <View style={{margin: 100}} />

        <View>  
          { this.vizStorySegments() }
        </View>

        <TouchableOpacity onPress={() => this.playDay()}>
          <Text> Play Day </Text>
        </TouchableOpacity>

      </View>
    )
  }
}