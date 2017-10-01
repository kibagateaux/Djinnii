import { StyleSheet } from 'react-native';
import { height, width } from '@lib/constants/style';


export default StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dailyBtn: {
    width: width / 3,
    backgroundColor: 'gold',
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOpacity: 2,
  },
  btnText: {
    textAlign: 'center',
  },
})