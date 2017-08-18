import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { _formatToUnix, _durationUnix } from '@lib/helpers';
import { daySecs } from '@lib/constants/time';

export default ({ setActiveActivity, segments, i }) => {
  // why is there a descrepencies in the color scheme? specifically "wlk" being black on occasion
  const colorSelector = (activity) => {
    switch(activity){
      case 'wlk': return 'green';
      case 'cyc': return 'blue';
      case 'run': return 'pink';
      case 'trp': return 'yellow';
      case 'plc': return 'black';
      case 'idl': return 'red';
      default: return 'red';
    }
  }

  const renderBar = (segment) => {
    const { startTime, endTime, activity } = segment;
    const duration = _durationUnix(startTime, endTime);
    const width = (duration * 90) / daySecs; //percentage of activity time over total seconds in day = percentage of screen width
    const color = activity? colorSelector(activity): colorSelector("plc");
    return(
      <TouchableWithoutFeedback 
        key={startTime? startTime: calories}
        onPress={() => setActiveActivity(segment)} 
      >
        <View style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}/>
      </TouchableWithoutFeedback>
    )
  }

  const renderDailySegments = () => {
    return segments.map(seg => {
      return (seg.type === "move")
        ? seg.activities.map(act => renderBar(act))
        : renderBar(seg);
    })
  }

  //retrieve storyline for times to place within timeline


  return (
    <View style={{
      marginTop: i * 20, 
      flexDirection: 'row',
    }}>
      { renderDailySegments() }
    </View>
  )
}

const styles = {
  bar: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
}