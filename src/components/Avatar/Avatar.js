import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video'

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default (props) => {
  const {
    activity,
    navigateToSettings,
    updateLocalGameMode
  } = props;


  // TODO Convert all GIFs to mp4 and utilize {loop} prop
  const avatarSelector = (activity) => {
    switch(activity) {
      case "running":         return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
      case "walking":         return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
      case "sleeping":        return {type: "gif", src:require("@media/GIFS/tiredblob.gif")};
      case "transport":       return {type: "gif", src:require("@media/GIFS/Panda-Blob.gif")};
      case "eating":          return {type: "gif", src: require("@media/GIFS/eating-apple.gif")}
      case "idl":             return {type: "gif", src: require("@media/GIFS/shrinking.gif")};
      case "weight-lifting":  return {type: "video", src: require("@media/MP4S/Growing-stronger-arms.mp4")};
      default:                return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
    }
  };

  const medium = avatarSelector(activity);
  console.log("avatar select", medium, activity);


  // Avatar layering Schema top -> down
  // switch mode + settings buttons
  // item
  // avatar  // https://github.com/react-native-community/react-native-video
  // environment

  return (
    <View style={styles.container}>
      {(medium.type === "video") ?
        <Video source={medium.src} style={styles.avatar}/> :
        <Image source={medium.src} style={styles.avatar}/>}

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={navigateToSettings}>
          <Icon name="settings" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {console.log('press swtich'); updateLocalGameMode()}}>
          <Icon name="repeat" size={24}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
