import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import styles from './styles';

import {localStatsAfterActivity} from '@lib/helpers/stats';

export default (props) => {
  const {
    userId,
    localStats,
    updateLocalStats,
    setAvatarActivity,
    trackUserBehaviour,
  } = props;

  const onActivityPress = (activity) => {
    const eventData = {
      userId: userId || "0",
      event: 'Action Pressed',
      properties: {
        name: activity,
        stats: localStats,
      }
    };
    return () => {
      trackUserBehaviour(eventData);
      updateLocalStats(localStatsAfterActivity(activity, localStats));
      setAvatarActivity(activity);
    };
  };
  
  const actions= [
    {action: 'Run',
    onPress: onActivityPress('running')},
    {action: 'Dance',
     onPress: onActivityPress('dancing')},
    {action: 'Sleep',
     icon: "😴💤",
     onPress: onActivityPress('sleeping')},
    {action: 'Eat',
     onPress: onActivityPress('eating')}
  ];

  const actionButtons = actions.map(({action, onPress, icon}) => 
    <ActionButton
      key={action}
      style={styles.localActionButtons}
      buttonText={action}
      onPress={onPress}
      primaryColor
      icon={icon}
      Icon={<Image />}
    />)
  
  return (
    <ScrollView horizontal style={styles.localGameContainer}>
      <View style={styles.localActionButtonContainer}>
        {actionButtons}
      </View>
    </ScrollView>
  )
}