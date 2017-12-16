import React, {PureComponent} from 'react';
import {ScrollView, View, Text} from 'react-native';
import _ from 'lodash';

import DailyProfile from '@containers/DailyProfile';
import FillerBox from '@components/common/FillerBox/FillerBox'; 
import {Icon} from 'react-native-elements';

import styles from './styles';

export default class extends PureComponent {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const {fetchActivities, user: {userId}} = this.props;
    if(userId) {
      // fetchActivities(userId);
    }
  }

  _renderFillerBox() {
    const {
      userId,
      navigateToIntegations,
      navigateToLogin,
    } = this.props;
    // first check if they have integrations and call updateData
    const mainText = userId ? 
      "No data available, connect more apps to see your Jinni's training regimine" :
      "You must sign in in order to see your Jinni's activity";
    const mainButtonFunc = userId ? navigateToIntegations : navigateToLogin;
    const mainButtonText = userId ? "CONNECT APPS" : "LOGIN";
    // const subText;
    // const subButtonFunc;
    // const subButtonText; 

    return (
      <View style={styles.fillerBoxContainer}>
        <FillerBox
          mainText={mainText}
          mainButtonFunc={mainButtonFunc}
          mainButtonText={mainButtonText}
        />
      </View>
    )
  }


  _renderActivityLegend() {
    const legend = [
      {
        color: "yellow",
        text: "In Transit",
        icon: "directions-transit"
      },
      {
        color: "red",
        text: "Sitting",
        icon: "weekend"
      },
      {
        color: "green",
        text: "Walking",
        icon: "directions-walk"
      },
    ];
    return legend.map(({color, text, icon}) => (
      <View style={styles.legendItem} key={text}>
        <View style={[styles.legendItemIcon, {backgroundColor: color}]}/>
        <Text> {text} </Text>
        <Icon name={icon} />
      </View>
    ))
  }

  _renderDailyProfiles() {
    const {days} = this.props;
    const profiles = _.isEmpty(days) ? null : // no data, tell them to add to apps or integrate new ones
      _.map(days, ({date, activities, overview}) =>
        _.isEmpty(activities) ? null : // motivational thing or something not null
          (<DailyProfile 
              key={date}
              date={date}
              daysActivities={activities}
              summary={overview}
            />));
    return (
      <View>
        <View style={styles.legendContainer}>
          {this._renderActivityLegend()}
        </View>
        {profiles}
      </View>
    )
  }

  render() {
    const {
      userId,
      activities: {activities},
    } = this.props;
    return (
      <ScrollView> 
        {(_.isEmpty(activities) 
          // || !userId
        ) ? this._renderFillerBox() : this._renderDailyProfiles()}
      </ScrollView>
    );
  }
}