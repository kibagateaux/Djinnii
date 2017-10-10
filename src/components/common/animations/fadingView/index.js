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
    this.fadeInAnimation()
      .then(this.fadeOutAnimation)
      .catch((err) => console.log("error fade in view", err));
    
  }

  /**
   * @name fadeInAnimation
   * @description - creates animation changing opacity from 0 to "toValue" over time "duration"
   * @return {undefined}
   */
  fadeInAnimation = () => {
    const {duration, toOpacity, fadeInDelay} = this.props;
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Animated.timing(
        this.state.opacity,
        {
          toValue: toOpacity,
          duration: duration,
        }
      ).start(), fadeInDelay))
    });
  }

  /**
   * @name fadeOutAnimation
   * @description - creates animation changing opacity from 0 to "toValue" over time "duration"
   * @return {undefined}
   */
  fadeOutAnimation = () => {
    const {duration, fadeOutDelay} = this.props;
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Animated.timing(
        this.state.opacity,
        {
          toValue: 0,
          duration: duration,
        }
      ).start(), fadeOutDelay))
    });
  }

  /**
   * @name render
   * @summary - creates a fade in background
   * @return {undefined}
   */
  render() {
    return (
      <Animated.View
        style={[
          {
            opacity: this.state.opacity,
            flex: 1
          },
          this.props.style
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}