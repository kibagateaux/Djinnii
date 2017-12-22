import React, {Component} from 'react';
import {Animated} from 'react-native';
import styles from '../styles';

export default class FadingView extends Component {
  /**
   * @name constructor
   * @param {object} props - {
   *  children: Component
   *  duration: Number
   *  toOpacity: Float
   *  delay: Number
   * }
   * @description - calls fadeInAnimation with time delay;
   * @return {undefined}
   */
  constructor(props) {
    super(props);
    console.log('fade comp const', props);
    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  /**
   * @name componentDidMount
   * @description - calls fadeInAnimation with time delay;
   * @return {undefined}
   */
  componentDidMount() {
    Animated.sequence([
      this.fadeInAnimation(),
      this.fadeOutAnimation()
    ])
  }

  /**
   * @name fadeInAnimation
   * @description - creates animation changing opacity from 0 to "toValue" over time "duration"
   * @return {undefined}
   */
  fadeInAnimation = () => {
    const {duration, toOpacity, fadeInDelay} = this.props;
    console.log('fad in', toOpacity, duration, fadeInDelay);
    return Animated.timing(
      this.state.opacity,
      {
        toValue: toOpacity,
        duration: duration,
        delay: fadeInDelay,
        useNativeDriver: true
      }
    ).start();
  }

  /**
   * @name fadeOutAnimation
   * @description - creates animation changing opacity from 0 to "toValue" over time "duration"
   * @return {undefined}
   */
  fadeOutAnimation = () => {
    const {duration, fadeOutDelay} = this.props;
    console.log('fad out', duration, fadeOutDelay);
    return Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: duration,
        delay: fadeOutDelay,
        useNativeDriver: true
      }
    ).start();
  }

  /**
   * @name render
   * @summary - creates a fade in background
   * @return {undefined}
   */
  render() {
    const {AnimatedComponent} = this.props;
    return (
      <AnimatedComponent
        style={[
          {
            opacity: this.state.opacity,
            flex: 1
          },
          this.props.style
        ]}
      >
        {this.props.children}
      </AnimatedComponent>
    );
  }
}