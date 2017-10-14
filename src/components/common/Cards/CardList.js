import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import styles from './styles';

export default (props) => {

  const _renderCards = () => {
    const {cards} = props;
    const theme = getTheme();
    return cards ? cards.map((item) => (
      <TouchableOpacity
        key={item.label}
        style={styles.cardContainer}
        /* style={[theme.cardStyle, styles.cardContainer]} */
        onPress={item.onPress}
      >
        {(false && <View style={[styles.cardImage, theme.cardImageStyle]} />)}
        <Text 
          style={styles.label}
          /* style={[theme.cardTitleStyle, styles.label]} */
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