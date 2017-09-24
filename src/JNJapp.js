import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Toggle} from 'react-native';
import styles from './styles';

export default class JNJ extends Component {
  constructor(props){
    super(props);
    this.state = {
      settings: false,
      contacts: ["uri", "uri", "uri", "uri", "uri"],
      openContact: null,
      goal: "BLAH BLAH I'M SUCCESFUL",
      missions: ["Sleep", "Nutrition", "Exercise"],
      journalTab: "journal",
      inspire: ["uri", "uri"],
      journal: ["/Users/00y/Desktop/Screen\ Shot\ 2017-07-13\ at\ 18.22.34.png", "/Users/00y/Desktop/Screen\ Shot\ 2017-07-20\ at\ 10.29.41.png"],
      apps: ["Facebook", "Fitbit", "Sleep Tracker +", "Jesus"]
    };
  }

  _renderNavBar() {
    return (
      <View style={styles.navBar}> 
        <Text style={{}} onPress={() => this.setState({settings:false})}> Back </Text>
        <Text style={{fontWeight: '600', fontSize: 20, alignSelf: 'center'}}>PROFILE</Text>
        <Text style={{}} onPress={() => this.setState({settings:true})}> Settings </Text>
      </View>
    )
  }

  _openContact() {
    console.log('open contact');
    
    return (
      <View style={styles.contactOverlay}>
        <View style={styles.contactImage}/> 
        <View>
          <View style={styles.contactButton}/>
          <Text> Call </Text>
        </View>
        <View>
          <View style={styles.contactButton}/>
          <Text> Text </Text>
        </View>
      </View>
    )
  }

  _renderContacts() {
    return <View style={styles.contactBar} onPress={() => this.setState({openContact: true})}> 
      {this.state.contacts.map(uri => <View src={uri} style={styles.contactImage} />)}
    </View>
  };

  _renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.goalText}> " {this.state.goal} " </Text>
        <View style={styles.missionContainer}> 
          <Text style={styles.missionText}> Active Missions: </Text> 
          {this.state.missions.map(m => <Text style={styles.missionText}> {m} </Text>)}
          <Text style={[styles.editButton, styles.missionText]}> Edit </Text> 
          {/* on press changes state to edit mode and all user text inputs become TextInputs and change state associated with them. on Save sends state to backend.
              just need someway for the script to identify necessary fields via prop types or userText extends Editable extends Text, too OO for me tbh*/}
        </View>
      </View>
    )
  }
  
  _renderTab() {
    return (
      <ScrollView style={styles.journalTab} horizontal>
        {this.state.journal.map(j => <Image style={styles.tabImage} uri={j} key={j}/>)}
      </ScrollView>
    );
  }

  _renderIntegrations() {
    return <View style={styles.integrationsContainer}>
      {this.state.apps.map(app => (
      <View style={styles.integration}>
        <View style={styles.integrationsApp}/>
        <Text style={styles.integrationsText}> {app} </Text>
      </View>
    ))}
    </View>
  }

_renderNotifications() {
  const notifcationTypes = ["email", "text", "push"];
  const notifs = ["awards", "alarms", "goals"];
  return <View>
    <Text style={{alignSelf: 'center', fontWeight: '600', fontSize: 15}}> Notifications </Text>
    {notifs.map(notif =>
    <View style={{margin: 10}}>
      <Text style={{fontWeight: '600'}}> {notif}: </Text>
      <Text style={{left: 30}}> {[...notifcationTypes].join(", ")} </Text>
    </View>
  )}
  </View>
}
// change 

  render() {
    console.log('state', this.state);
    
  return !this.state.settings ?
     (
      <ScrollView>
        {this._renderNavBar()}
        {this.state.openContact? _openContact() : null}
        {this._renderContacts()}
        {this._renderHeader()}
        {this._renderTab()}
      </ScrollView>
    ) :
    (
      <ScrollView>
        {this._renderNavBar()}
        {this._renderIntegrations()}
        {this._renderNotifications()}
      </ScrollView>
    )
  }
}