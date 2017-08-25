import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { _formatToUnix, _durationUnix } from '@helpers/time';
import { dayInMicroSecs } from '@constants/time';

export default ({ setActiveActivity, setActiveSegment, segments, stats, activities }) => {
  // why is there a descrepencies in the color scheme? specifically "wlk" being black on occasion
  const colorSelector = (activity) => {
    switch(activity){
      case 'move': return 'green';
      case 'place': return 'black';
      case 'wlk': return 'green';
      case 'cyc': return 'blue';
      case 'run': return 'pink';
      case 'trp': return 'yellow';
      case 'plc': return 'black';
      case 'idl': return 'red';
      default: return 'red';
    }
  }

  const renderSegmentBar = (segment, onPress) => {
    const { startTime, endTime, duration } = segment.meta || segment;
    const width = (duration * 90) / dayInMicroSecs; //percentage of activity time over total seconds in day = percentage of screen width
    const type = segment.meta ? segment.meta.type : segment.activity ? segment.activity : 'idl';
    const color = colorSelector(type);  //still needed because segments are not normalized only activities
    const firstActivityTime = (segment.activities > 0) ? segment.activies[0].startTime : null;
      // if there were no activities then there is nothing under activities to match it too, thus still need setActivity vs. setSegment
    return(
      <TouchableWithoutFeedback 
        key={startTime * duration}
        onPress={() => onPress(startTime, firstActivityTime)} 
      >
        <View style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}/>
      </TouchableWithoutFeedback>
    )
  }

  const renderDailySegments = () => {
    return segments.map((seg) => {
      const onPress = (segStart, actStart) => {
        actStart ? setActiveActivity(actStart) : setActiveSegment(seg);
      };

     return (seg.activies > 0)
        ? seg.activities.map(act => renderSegmentBar(act, setActiveActivity))
        : renderSegmentBar(seg, setActiveActivity);
    });
  }
      

  // take actual activies and fill null time with idle blocks, keeping 
  // half screen width because does not accomodate 12am to first act or last act to 12am
  const renderDailyActivities = () => {
    return Object.keys(activities).map((act) => {
      return renderSegmentBar(activities[act], setActiveActivity)
    })
  }
  
  
// endTime of last bar and startTime of next bar to fill inbetween
const getFillerSpace = (endTime, startTime) => {
  console.log('rend filler', startTime - endTime);
  const filler = {
    startTime: endTime,
    endTime: startTime,
    duration: startTime - endTime,
    type: 'idl',
    onPress: () => console.log("idl segment selected")
  };

  return renderSegmentBar(filler);
}

  return (
    <View style={{
      flexDirection: 'row',
    }}>
    {/* {renderDailySegments()} */}
      { renderDailyActivities() }
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