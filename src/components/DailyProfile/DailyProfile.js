import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Djinn from '@containers/Djinn.Container';
import ActivityBar from '@components/ActivityBar/ActivityBar';
import { _formatToUnix, _durationUnix, statsAfterActivity } from '@lib/helpers';

export default class DailyProfile extends Component {

  adjustStatsForActivity(act){
    const {stats, updateStats} = this.props;

    if(Array.isArray(act.activities)){
      return act.activities.forEach(act => this.adjustStatsForActivity(act));
    }
    const activityType = act.activity? act.activity : act.activity = 'plc';
    const duration = _durationUnix(act.startTime, act.endTime)

    /* these should be removed from PlayDay*/
    const updatedStats = statsAfterActivity(act, stats);
    return updateStats(updatedStats);
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