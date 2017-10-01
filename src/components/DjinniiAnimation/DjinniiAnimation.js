import React from 'react';
import {View} from 'react-native';
import Sprite from '@components/common/Sprite/Sprite';
import { height, width } from '@lib/constants/style';
import styles from './styles';

const DjinniiSprite = ({activeActivity, style}) => {
  const frames = [
    require("@lib/images/runSprite0.png"),
    require("@lib/images/runSprite1.png"),
    require("@lib/images/runSprite2.png"),
    require("@lib/images/runSprite3.png"),
    require("@lib/images/runSprite4.png"),
    require("@lib/images/runSprite5.png"),
  ];
  const frameSelector = (activity) => {
    switch(activity){
      case "wlk": return [0,1,2];
      case "run": return [0,2,4];
      case "cyc": return [5,6];
      case "plc": return [2,3,4];
      case "idl": return [0];
      default:    return [0];
    }
  };

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