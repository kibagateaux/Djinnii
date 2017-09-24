import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';


export default (props) => {
  const renderButtons = () => {
    const buttons = [
      {
        text: "Play Day",
        function: props.playDay
      },
      // {
      //   text: "Goals",
      //   function: props.toggleShowGoals
      // },
      // {
      //   text: "Adventures",
      //   function: props.showDailyAdventures
      // },
    ]
    return buttons.map((btn) => (
      <TouchableOpacity 
        key={btn.text}
        onPress={btn.function}
        style={styles.dailyBtn}
      >
        <Text style={styles.btnText}> {btn.text} </Text>
      </TouchableOpacity>
    ))
  }


  return (
    <View style={styles.btnContainer}>
      {renderButtons()}
    </View>
  )
}