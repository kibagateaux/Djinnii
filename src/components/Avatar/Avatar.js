import React from 'react';
import {View} from 'react-native';
import Sprite from '@components/common/Sprite/Sprite';
import { height, width } from '@lib/constants/style';
import styles from './styles';

const DjinniiSprite = ({activeActivity, style}) => {
  const frames = [
    require("@media/IMAGES/runSprite0.png"),
    require("@media/IMAGES/runSprite1.png"),
    require("@media/IMAGES/runSprite2.png"),
    require("@media/IMAGES/runSprite3.png"),
    require("@media/IMAGES/runSprite4.png"),
    require("@media/IMAGES/runSprite5.png"),
  ];

  const frameSelector = (activity) => {
    switch(activity){
      case "walking": return [0,1,2];
      case "running": return [0,2,4];
      case "cycling": return [5,6];
      case "plc":     return [2,3,4];
      case "idl":     return [0];
      default:        return [0];
    }
  };

  const avatarSelector = (activity) => {
    switch(activity) {
      case "running":         return require("../../lib/media/GIFS/running-bebo.gif");
      case "walking":         return require("../../lib/media/GIFS/running-bebo.gif");
      case "sleeping":        return require("../../lib/media/GIFS/tiredblob.gif");
      case "weight-lifting":  return require("../../lib/media/MP4S/Growing-stronger-arms.mp4");
      default:                return require("../../lib/media/GIFS/running-bebo.gif");
    }
  };

  const medium = avatarSelector(activeActivity);

  return (
    <View style={styles.container}>
      <Sprite 
        loop
        frames={frames} 
        frameSelector={frameSelector}
        conditional={activeActivity.activity}
        alt="Djinii enacting your currently selected activity"
      />
    </View>
  );
}

export default DjinniiSprite;