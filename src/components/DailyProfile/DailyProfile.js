import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Djinn from '@containers/Djinn';
import ActivityBar from '@components/ActivityBar/ActivityBar';
import {_getFirstTimestampInDay, _getFirstMSInDay, _sortByTime} from '@helpers/time';
import {statsAfterActivity} from '@helpers/stats';
export default (props) => {
  const {
    activities,
    stats,
    goals,
    storyline,
    displayDailyGoals,
    setActiveActivity,
    setActiveSegment,
    toggleDailyGoalsDisplay,
    setDisplayStats
  } = props;

  // deprecated in favor of firebase single source
  // this allows for reliable data when replaying days, centralized calculations, etc
  // lowkey necessary if firebase isn't functioning
      // if pure function then shouldn't matter so good backup if offline
  // const setDisplayStatsForActivity = (act) => {
  //   if(Array.isArray(act.activities)){
  //     return act.activities.forEach(act => setDisplayStatsForActivity(act));
  //   }
  //   /* these should be removed from PlayDay to allow continuity*/
  //   return statsAfterActivity(act, stats);
  // }



  const playDay = async () => {
    
    
    // update redux displaydStats
    // pull in stats from first startTime -> again what if none?
    // then run play day
    
    const dayStartTime = storyline.segments[0].meta.startTime;
    const firstStamp = _getFirstMSInDay(dayStartTime);
    const firstAct = _getFirstTimestampInDay(firstStamp, stats);
    const firstStatsObj = firstAct[Object.keys(firstAct)[0]];
    const uid = 0;
    
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

  const _renderDailyGoals = () => {
    return goals.map((goal) => {
      <View key={goal.id}>
        <Text> {goal.text} </Text>
      </View>
    })
  }

  const vizStorySegments = () => { 
    const { segments, date, key } = storyline;
    return (
      <ActivityBar 
        key={key} 
        date={date} 
        segments={segments}
        activities={activities}
        setActiveActivity={setActiveActivity}
        setActiveSegment={setActiveSegment}
        stats={stats}
      />
    )
  }

  const toggleShowGoals = (date) => {
    toggleDailyGoalsDisplay(true);
  }

    return (
      <View>        

        {}
        <View>  
          { vizStorySegments() }
        </View>

      </View>
    )
}