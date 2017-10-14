import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    width,
    padding: height / 80
  },
  cardContainer: {
    height: height / 8,
    padding: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowRadius: height / 100,
    shadowOpacity: 0.2
  },
  cardImage: {
    alignSelf: 'flex-start'
  },
  label: {
    fontWeight: '500',
    alignSelf: 'flex-start'
  },
});