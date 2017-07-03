import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { _formatToUnix, _durationUnix } from '../lib/helpers';
import { daySecs } from '../lib/constants/time';
import moment from 'moment';

export default class ActivityBar extends Component {
  constructor(props) {
    super(props);
  }

  // why is there a descrepencies in the color scheme? specifically "wlk" being black on occasion
  color(activity) {
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

  renderBar(segment){
    const { startTime, endTime, activity } = segment;
    const duration = _durationUnix(startTime, endTime);
    const width = (duration * 90) / daySecs; //percentage of activity time over total seconds in day = percentage of screen width
    const color = activity? this.color(activity): this.color("plc");

    return(
      <TouchableWithoutFeedback 
        key={startTime? startTime: calories}
        onPress={() => this.props.setActiveActivity(_formatToUnix(startTime))} 
      >
        <View style={[styles.bar, {width: `${width}%`, backgroundColor: color}]}/>
      </TouchableWithoutFeedback>
    )
  }

  renderDailySegments(){
    return this.props.segments.map(seg => {
      return (seg.type === "move")
        ? seg.activities.map(act => this.renderBar(act))
        : this.renderBar(seg);
    })
  }

  //retrieve storyline for times to place within timeline

  render() {
    return (
      <View style={{
        marginTop: this.props.i * 20, 
        flexDirection: 'row',
      }}>
        { this.renderDailySegments() }
      </View>
    )
  }
}

const styles = {
  bar: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // flexDirection: 'column'
  }
}