import React from 'react';
import {View, Image} from 'react-native';
import Video from 'react-native-video'
import { height, width } from '@lib/constants/style';
import styles from './styles';

export default ({activeActivity, style}) => {
  const avatarSelector = (activity) => {
    switch(activity) {
      case "running":         return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
      case "walking":         return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
      case "sleeping":        return {type: "gif", src:require("@media/GIFS/tiredblob.gif")};
      case "transport":       return {type: "gif", src:require("@media/GIFS/Panda-Blob.gif")};
      case "idl":             return {type: "gif", src: require("@media/GIFS/shrinking.gif")};
      case "weight-lifting":  return {type: "video", src: require("@media/MP4S/Growing-stronger-arms.mp4")};
      default:                return {type: "gif", src:require("@media/GIFS/running-bebo.gif")};
    }
  };

  const medium = avatarSelector(activeActivity.activity);
  console.log('gif', activeActivity, medium.src);
  return (
    <View style={styles.container}>
      {(medium.type === "video") ?
        <Video /> :
        <Image source={medium.src} style={styles.avatar}/>}
    </View>
  );
}
