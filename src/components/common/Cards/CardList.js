import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import {getTheme} from 'react-native-material-kit';

export default (props) => {

  const _renderCard = (item, humphrey) => {
    const theme = getTheme();
    console.log('card list', item, humphrey, theme);
    return (
      <View style={[styles.cardContainer, theme.cardStyle]}>
        {(false && <View style={[styles.cardImage, theme.cardImageStyle]} />)}
      </View>
    );
  };

  return (
    <FlatList
      data={props.cards}
      renderItem={_renderCard}
    />
  )
}