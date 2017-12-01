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
        {this._renderDailyProfiles()}
      </ScrollView>
    );
  }
}