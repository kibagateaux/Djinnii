import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: height / 2,
    marginTop: height / 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  header: {
    height: height / 10,
    width: width
  },
  appName: {
    fontSize: 20,
    color: 'white',
  },
  description: {
    color: 'white',   
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionButton: {
    padding: width / 20,
  }
});