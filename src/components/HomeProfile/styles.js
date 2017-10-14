import { StyleSheet } from 'react-native';
import { height, width } from '@lib/constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height / 3,
    width: width,
    marginBottom: width / 10,
    marginTop: width / 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  avatarContainer: {
    flex: 3
  },
  statsContainer: {
    flex: 1
  },
  switchButton: {
    position: 'absolute',
    height: height / 20,
    bottom: height / 25
  },
  djinnii: {
    flex: 2
  },
  actionButton: {
    fontWeight: "700"

  }
})