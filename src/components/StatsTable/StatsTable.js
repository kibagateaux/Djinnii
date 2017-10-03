import React, {PureComponent} from 'react';
import {Text, ScrollView, Animated} from 'react-native';
import {height, width} from '@lib/constants/style';
import styles from './styles';

const AnimatedText = Animated.createAnimatedComponent(Text);
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
        difference = currentStats[key] - nextStats[key];
        return {...diff, [key]: difference}
      }, {});
      this.setState({statDifference});
    }
  }

  _renderStatsColumn = (statCategory) => {
    return Object.keys(statCategory).map(statRow => {
      const stat = statCategory[statRow];
      const statFloat = String.toString(stat).includes(".") ?
        /(^\d*\.\d?)/.exec(stat) : stat
      const statDiff = this.state.statDifference[statRow];
      const difference = (statDiff && statDiff !== 0) ?
        `${statDiff < 0 ? '-' : '+'} ${Math.abs(statDiff)}` :
        null;
      
      return (
        <Text style={styles.statRow} key={statRow}>
          <Text style={styles.statText}>{statRow}:  </Text> 
          <Text style={styles.statText}>
            {statFloat}
            <AnimatedText>
              {difference}
            </AnimatedText>
          </Text>
        </Text>
      )
    })
  };


  render() {
    const {activeStats} = this.props
    return (
      <ScrollView style={styles.container}> 
        { activeStats ? this._renderStatsColumn(activeStats) : null }
      </ScrollView>
    )
  }
}