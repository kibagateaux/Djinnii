import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import DailyProfile from '@containers/DailyProfile';
import _ from 'lodash';

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
      user: {userId},
      navigateToIntegations,
      navigateToLogin,
    
    } = this.props;
    const mainText = userId ? 
      "No data available, connect more apps to see your Jinni's training regimine" :
      "You must sign in in order to see your Jinni's activity";
    const mainButtonFunc = userId ? navigateToIntegations : navigateToLogin;
    const mainButtonText = userId ? "CONNECT APPS" : "LOGIN";
    // Should th
    // const subText;
    // const subButtonFunc ;
    // const subButtonText; 

    return (
      <FillerBox
        mainText={mainText}
        mainButtonFunc={mainButtonFunc}
        mainButtonText={mainButtonText}
      />
    )
  }

  _renderDailyProfiles() {
    const {days, user} = this.props;
    if(!user) {
      // return component telling them to login and connect apps
      return null;
    } else {
      return _.isEmpty(days) ? null : // no data, tell them to add to apps or integrate new ones
        _.map(days, ({date, activities, overview}) =>
          _.isEmpty(activities) ? null : // motivational thing or something not null
            (<DailyProfile 
                key={date}
                date={date}
                daysActivities={activities}
                summary={overview}
              />));
    }
  }

  render() {
    return (
      <ScrollView> 
        {_.isEmpty(this.props.activities) ? this._renderFillerBox() : this._renderDailyProfiles()}
      </ScrollView>
    );
  }
}