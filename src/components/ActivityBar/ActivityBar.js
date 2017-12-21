import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import {_durationUnix} from '@helpers/time';
import {dayInMicroSecs} from '@constants/time';
import styles from './styles';


export default ({onPress, activity}) => {
  const colorSelector = (activity) => {
    switch(activity){
      case 'place': return 'black';
      case 'plc': return 'black';
      case 'walking': return 'green';
      case 'cycling': return 'blue';
      case 'running': return 'pink';
      case 'transport': return 'yellow';
      case 'idl': return 'red';
      default: return 'red';
    }
  }

  const renderActivityBar = () => {
    const {startTime, endTime} = activity;
    const duration = _durationUnix(startTime, endTime);
    const width = (duration * 100) / dayInMicroSecs; // percentage of activity time over total seconds in day = percentage of screen width
    const color = colorSelector(activity.activity);
    // Feel like something is wrong with rendering. Walking isn't as long as it should be and math for width is wrong
    return(
      <TouchableOpacity
        onPress={onPress}
        style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}
      >
        <View style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}/>
      </TouchableOpacity>
    )
  }

  return renderActivityBar();
};