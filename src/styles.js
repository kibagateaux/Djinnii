import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  navBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  contactBar: {
    height: height / 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderColor: 'black',
    zIndex: 1,
    elevation: 55
    // shadowColor: 'black',
    // shadowOpacity: 30,
    // shadowOffset: {height: 4}
  },
  contactOverlay: {
    height: height / 4,
    width: width / 3,
    borderColor: 'black',
    borderWidth: 2
  },
  contactButton:{
    height: 20,
    width: 20,
  },
  contactImage: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25
  },
  headerContainer: {
    alignItems: 'center',

  },
  goalText: {
    fontWeight: '600',
    fontSize: 20,
    margin: 25
  },
  missionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  missionText: {
    margin: 3
  },
  editButton: {
    // justifyContent: 'flex-end'
    // alignSelf: 'flex-start'
    color: 'blue',
    fontWeight: '700'
  },
  journalTab: {
    height: height / 2,
    width: width,
    margin: 20
  },
  tabImage: {
    height: height / 2,
    width: width - 50,
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 20,
    margin: 10
  },
  
  
  
  
  integrationsContainer: {
    height: height / 3,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'scroll',
    alignItems: 'center'
  },
  integrationsApp: {
    height: 60,
    width: 60,
    // margin: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center'
  },
  integrationsText: {
    textAlign: 'center'
  }
})