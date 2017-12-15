import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text, AsyncStorage} from 'react-native';
import _ from 'lodash';

import ActivityBar from '@components/ActivityBar/ActivityBar';

import {_getFirstTimestampInDay, _getFirstMSInDay, _sortArrByTime} from '@helpers/time';
import {dayInMicroSecs} from '@lib/constants/time';
import {getDayOfWeekNameFromTimestamp, getDayofWeekDateFromTimestamp} from '@helpers/time';
import {statsAfterActivity} from '@helpers/stats';
import styles from './styles';

export default class extends PureComponent {
  
  constructor(props) {
    super(props);
  }


  playDay = async () => {
    const {
      activities,
      stats,
      setActiveActivity,
      setDisplayStats
    } = this.props;
    
    // update redux displaydStats
    // pull in stats from first startTime -> again what if none?
    // then run play day
    const dayStartTime = storyline.segments[0].meta.startTime;
    const firstStamp = _getFirstMSInDay(dayStartTime);
    const firstAct = _getFirstTimestampInDay(firstStamp, stats);
    const firstStatsObj = firstAct[Object.keys(firstAct)[0]];
    
    console.log('play day', firstAct, firstStatsObj);
    
    setDisplayStats(firstStatsObj); // diplay first stats for day
    Object.keys(activities).forEach((time, i, arr) => {
      const act = activities[time];
      const nextAct = activities[arr[i+1]];
      if(!nextAct || !nextAct.startTime) return; // make nextAct displayFunc  
      const {duration, startTime} = act;
      const func = () => {
        const sequentialStat = statsAfterActivity(act, stats[time]) // incase stat does not exist yet, this will also overwrite a more recent stat update if there
        setActiveActivity(act.startTime);
      };
      setTimeout(func, duration / 100);
    })
  }


  _renderDayLabel(date) {
    return (
      <Text style={styles.dayLabel}>
        {getDayOfWeekNameFromTimestamp(date) + ", " + getDayofWeekDateFromTimestamp(date)}
      </Text>
    )
  }
  _renderDayActivityBars() {
    const {
      activities,
      daysActivities,
      setActiveActivity,
      setDisplayStats
    } = this.props;
    const activityList = _.filter(activities, (act, time) => _.includes(daysActivities, time))

    return _.isEmpty(activityList) ? null :
      _sortArrByTime(activityList).map((act) => (
        <ActivityBar
          key={act.startTime} 
          activity={act}
          onPress={() => setActiveActivity(act.startTime)}
        />
      ));

  }

  render() {
    return (
      <View style={styles.profileContainer}>
        { this._renderDayLabel(this.props.date) }
        <View style={styles.activityGraph}>
          { this._renderDayActivityBars() }
        </View>
      </View>
    )
  }
}