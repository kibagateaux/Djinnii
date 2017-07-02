import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { _formatToUnix, _durationUnix } from './lib/helpers';
import moment from 'moment';

export default class ActivityBar extends Component {
  constructor(props) {
    super(props);
    this.daySecs = 24 * 60 * 60;
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



  renderDailySummary(){
    // return Views colored by activity, width = (duration / daysecs)%
    return this.props.activities.map(act => {
      return this.renderBar(act);
      // let color;
      // const { activity, duration, calories } = act;
      
      // const width = (duration * 100) / this.daySecs; 
      // // converts duration of into percentage of screen width out of 100
      // // so a 1 hour walk will be 1/24th of the screen
      
      // return (
      //   <View key={width * calories} style={[styles.bar, { backgroundColor: this.color(activity), width: width}]}/>
      // )
    })
  }

  renderBar(segment){
    const { startTime, endTime, activity } = segment;
    const duration = _durationUnix(startTime, endTime);
    const width = (duration * 90) / this.daySecs; // percentage of activity time over total seconds in day = percentage of screen width
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
        {/*{this.renderDailySummary()}*/}
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