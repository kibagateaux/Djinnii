import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {_durationUnix} from '@helpers/time';
import {dayInMicroSecs} from '@constants/time';
import styles from './styles';

export default ({onPress, activity}) => {
  // why is there a descrepencies in the color scheme? specifically "wlk" being black on occasion
  const colorSelector = (activity) => {
    switch(activity){
      case 'move': return 'green';
      case 'place': return 'black';
      case 'walking': return 'green';
      case 'cycling': return 'blue';
      case 'running': return 'pink';
      case 'transport': return 'yellow';
      case 'plc': return 'black';
      case 'idl': return 'red';
      default: return 'red';
    }
  }

  // FIXMe edit styles so days are in one row in DailyProfile 
  const renderActivityBar = () => {
    const {startTime, endTime} = activity;
    const duration = _durationUnix(startTime, endTime);
    const width = (duration * 180) / dayInMicroSecs; // percentage of activity time over total seconds in day = percentage of screen width
    const color = colorSelector(activity.activity);
    
    if(activity.activity === "walking") {
      console.log('walking act', duration, color);
    }

    // console.log('rend act bars', activity, duration);
    return(
      <TouchableWithoutFeedback onPress={() => onPress(startTime)}>
        <View style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}/>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={{
      flexDirection: 'row',
    }}>
      { renderActivityBar() }
    </View>
  )
};