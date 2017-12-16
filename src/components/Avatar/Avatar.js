import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';


// TODO Convert all GIFs to mp4 and utilize {loop} prop
const avatarSelector = (activity) => {
  switch(activity) {
    case "running":         return {type: "gif", src:require("@media/gif/running-bebo.gif")};
    case "walking":         return {type: "gif", src:require("@media/gif/running-bebo.gif")};
    case "sleeping":        return {type: "gif", src:require("@media/gif/tiredblob.gif")};
    case "transport":       return {type: "gif", src:require("@media/gif/Panda-Blob.gif")};
    case "dancing":         return {type: "gif", src: require("@media/gif/shrinking.gif")}
    case "eating":          return {type: "gif", src: require("@media/gif/eating-apple.gif")}
    case "idl":             return {type: "gif", src: require("@media/gif/shrinking.gif")};
    case "weight-lifting":  return {type: "video", src: require("@media/mp4/Growing-stronger-arms.mp4")};
    default:                return {type: "gif", src:require("@media/gif/running-bebo.gif")};
  }
};

export default (props) => {
  const {
    activity,
    navigateToSettings,
    updateLocalGameMode,
    avatarName
  } = props;

  const medium = avatarSelector(activity);

  // Avatar layering Schema top -> down
  // switch mode + settings buttons
  // item
  // avatar  // https://github.com/react-native-community/react-native-video
  // environment

  return (
    <View style={styles.container}>
      <Text style={styles.avatarTitleName}> {avatarName || "Faqir"} </Text>
      {(medium.type === "video") ?
        null
        // <Video
        //   source={medium.src}
        //   style={styles.avatar}
        // /> 
        :
        <Image
          source={medium.src}
          style={styles.avatar} 
          resizeMode="contain"
        />}

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={navigateToSettings}>
          <Icon name="settings" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={updateLocalGameMode}>
          <Icon name="repeat" size={24}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
