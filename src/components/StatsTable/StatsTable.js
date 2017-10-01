import React, {PureComponent} from 'react';
import { Text, ScrollView } from 'react-native';
import { height, width } from '@lib/constants/style';
import styles from './styles';

export default class extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      statDifference: {}
    };
  }

  componentDidUpdate(nextProps, nextState) {
    const nextStats = nextProps.activeStats;
    const currentStats = this.props.activeStats;
    // 'next !== current' needed otherwise continuous update. for some reason PureComponent isn't handling correctly
    if(nextStats && currentStats && (nextStats !== currentStats)) {
      const statDifference = Object.keys(nextStats).reduce((diff, key) => {
        difference = nextStats[key] - currentStats[key];
        return {...diff, [key]: difference}
      }, {});
      this.setState({statDifference});
    }
  }

  _renderStatsColumn = (statCategory) => {
    return Object.keys(statCategory).map(statRow => {
      const stat = statCategory[statRow];
      statFloat = String.toString(stat).includes(".") ?
        /(^\d*\.\d?)/.exec(stat) : stat
      // if(typeof statRow ==='object' || typeof statFloat === 'object') return;
      const statDiff = this.state.statDifference[statRow];

      const difference = (statDiff && statDiff !==0) ?
        `${statDiff > 0 ? ' - ' : ' + '} ${Math.abs(statDiff)}` :
        null;
      
      console.log('rend stat col', statDiff, difference);
      return (
        <Text style={styles.statRow} key={statRow}>
          <Text style={styles.statText}> {statRow}  : </Text> 
          <Text style={styles.statText}> {statFloat} {difference} </Text>
        </Text>
      )
    })
  };

  render() {
    const {activeStats} = this.props
    console.log('stat tab rend', this.state);
    return (
      <ScrollView style={styles.container}> 
        { activeStats ? this._renderStatsColumn(activeStats) : null }
      </ScrollView>
    )
  }
}