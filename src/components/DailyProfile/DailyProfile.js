import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

import ActivityBar from '@components/ActivityBar/ActivityBar';
import {_getFirstTimestampInDay, _getFirstMSInDay, _sortByTime} from '@helpers/time';
import {statsAfterActivity} from '@helpers/stats';
import styles from './styles';

export default class extends PureComponent {
  
  constructor(props) {
    super(props);
  
  }

  async componentDidMount() {
    // const id = await AsyncStorage.getItem(COGNITO_ID);
    // const data = await axios.get(`https://og1pdgpgji.execute-api.us-east-1.amazonaws.com/dev/moves/storyline/${id || 0}`);
    // console.log('aws res', data);
  }

  playDay = async () => {
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

  renderDailyGoals = () => {
    const {goals} = this.props;
    return goals.map((goal) => {
      <View key={goal.id}>
        <Text> {goal.text} </Text>
      </View>
    })
  }

  vizStorySegments = () => { 
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
    } = this.props;
    const { segments, date, key } = storyline;
    return (
      <View style={styles.dailyProfileContainer}>
        <ActivityBar 
          key={key} 
          date={date} 
          segments={segments}
          activities={activities}
          setActiveActivity={setActiveActivity}
          setActiveSegment={setActiveSegment}
          stats={stats}
        />
      </View>
    )
  }

  toggleShowGoals = (date) => {
    const {goals} = this.props
    this.setState({showGoals: true, goals: goals[date]});
  }

  render() {
    return (
      <View>        
        <View>
          { this.vizStorySegments() }
        </View>
      </View>
    )
  }
}