import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Djinn from '@containers/Djinn.Container';
import ActivityBar from '@components/ActivityBar/ActivityBar';
import DailyButtons from '@components/DailyButtons/DailyButtons';
import { _durationUnix } from '@helpers/time';
import { getStatsAtTime } from '@lib/firebase';
import { statsAfterActivity } from '@helpers/stats';

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
    updateStats
  } = props;

  // deprecated in favor of firebase single source
  // this allows for reliable data when replaying days, centralized calculations, etc
  // lowkey necessary if firebase isn't functioning
      // if pure function then shouldn't matter so good backup if offline
  // const updateStatsForActivity = (act) => {
  //   if(Array.isArray(act.activities)){
  //     return act.activities.forEach(act => updateStatsForActivity(act));
  //   }
  //   /* these should be removed from PlayDay to allow continuity*/
  //   return statsAfterActivity(act, stats);
  // }



  const playDay = async () => {
    
    
    // update redux displaydStats
    // pull in stats from first startTime -> again what if none?
    // then run play day

    const dayStartTime = storyline.segments[0].startTime;
    const firebaseStats = await getStatsAtTime(0, dayStartTime);
    const stats = firebaseStats.val() ?
      firebaseStats.val() :
      // stats[dayStartTime] ? 
      stats[dayStartTime]; // : // will never work because redux store does not use timestamps
      // else pull last available stat and go from there 
        // const times = Object.keys(stats); const lastAct = stats[times[times.length - 1]]

    const uid = 0;
    
    updateStats(stats, uid, false); // reset stats for day
    storyline.segments.forEach((act, i, acts) => {
      const duration = _durationUnix(act.startTime, act.endTime) * 3;
      const func = () => {
        const sequentialStat = statsAfterActivity(act, stats)
        updateStats(sequentialStat, uid, false);
        setActiveActivity(act);
      };
      setTimeout(func, duration);
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

        <TouchableOpacity onPress={() => playDay()}>
          <DailyButtons playDay={playDay} />
        </TouchableOpacity>

      </View>
    )
}