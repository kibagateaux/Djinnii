import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default (props) => {
  const _renderCards = () => {
    const {cards} = props;
    return cards ? cards.map((item) => (
      <TouchableOpacity
        key={item.label}
        style={styles.cardContainer}
        onPress={item.onPress}
      >
        {(false && <View style={[styles.cardImage]} />)}
        <Text 
          style={styles.label}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    )) : null;
  };

  return (
    <ScrollView
      style={styles.listContainer}
      showsVerticalScrollIndicator
      showsHorizontalScrollIndicator
    >
      {_renderCards()}
    </ScrollView>
  )
}