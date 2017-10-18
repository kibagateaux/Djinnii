import React, {PureComponent} from 'react';
import {Text, ScrollView, Animated, Easing} from 'react-native';
import {height, width} from '@lib/constants/style';
import FadeComponent from '@components/common/animations/fadeComponent';
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

  _makeDifferenceScoreBoard = (diff) => (
    <FadeComponent
      AnimatedComponent={Animated.Text}
      style={styles.statTextContainer}
      duration={800}
      toOpacity={0.3}
      fadeInDelay={0}
      fadeOutDelay={1000}
      easing={Easing.linear}
    >
      {diff}
    </FadeComponent>
  )

  _renderStatsColumn = (statCategory) => {
    const toInt = (n) => n ? String(n).split(".")[0] : null;
    return Object.keys(statCategory).map(statRow => {
      const stat = toInt(statCategory[statRow]);
      const statDiff = this.state.statDifference[statRow];
      const difference = (statDiff && statDiff !== 0) ?
        `${statDiff < 0 ? '-' : '+'} ${Math.abs(statDiff)}` : null;
      const diff = toInt(difference);
      return (
        <Text style={styles.statRow} key={statRow}>
          <Text style={styles.statText}> {statRow}:  </Text> 
          <Text style={styles.statText}>
            {stat} {diff}
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