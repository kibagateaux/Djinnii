import { StyleSheet } from 'react-native';
import { height, width } from '@lib/constants/style';


export default StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dailyBtn: {
    flex: 1,
    backgroundColor: 'gold',
  },
  btnText: {
    textAlign: 'center',
    
  },
})