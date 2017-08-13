import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Djinn from './Djinn';
import ActivityBar from './ActivityBar';
import { _formatToUnix, _durationUnix } from '../lib/helpers';

export default class DailyProfile extends Component {

  adjustStatsForActivity(act){
    const updateStats = this.props.updateStats;

    if(Array.isArray(act.activities)){
      return act.activities.forEach(act => this.adjustStatsForActivity(act));
    }
    const activityType = act.activity? act.activity : 'plc';
    const duration = _durationUnix(act.startTime, act.endTime)
    
    switch(activityType){
      case 'wlk':
        return updateStats({int: parseFloat(.02) * duration });
      case 'run':
        return updateStats({agy: parseFloat(.02) * duration });
      case 'cyc':
        return updateStats({stm: parseFloat(.02) * duration });
      case 'plc':
        return updateStats({str: parseFloat(-.01) * duration });
    }
  }


  playDay = () => {
    this.props.storyline.segments.forEach((act, i, acts) => {
      const duration = _durationUnix(act.startTime, act.endTime) * 3;
      const func = () => {
        this.adjustStatsForActivity(act);      
        this.props.setActiveActivity(act); 
      };
      setTimeout(func, duration);
    })
  }

  vizStorySegments(){
    const { segments, date, key } = this.props.storyline;
    return (
      <ActivityBar 
        key={key} 
        date={date} 
        segments={segments}
        setActiveActivity={this.props.setActiveActivity}
      />
    )
  }

  render() {
    return (
      <View>        

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