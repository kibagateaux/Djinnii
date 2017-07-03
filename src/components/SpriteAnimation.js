import React from 'react';
import SpriteAnimation from 'react-native-animated-sprite';
import { height, width } from '../lib/constants/style';

const Sprite = ({ activity, style }) => {
  
  const spriteFrames = function(activity) {
    switch(activity){
      case "wlk": return [0,1,2];
      case "run": return [0,2,4];
      case "cyc": return [5,6];
      case "plc": return [2,3,4];
      case "idl": return [0];
      default:    return [0];
    }
  }(activity);

  const renderSprite = (activity) => (
      <SpriteAnimation
        sprite={{
          name: activity,
          size: {height: height/5, width: width/2},
          animationTypes: ["run", "wlk", "cyc"],
          frames: [
            require("../lib/images/runSprite0.png"),
            require("../lib/images/runSprite1.png"),
            require("../lib/images/runSprite2.png"),
            require("../lib/images/runSprite3.png"),
            require("../lib/images/runSprite4.png"),
            require("../lib/images/runSprite5.png"),
          ],
          animationIndex: spriteFrames
        }}
        loopAnimation        
        coordinates={{top: 0, left: 0}}
        animationFrameIndex={spriteFrames}
        size={{height: height/5, width: width/2}}
        style={{ ...style }}
        alt="Animation depicting your currently selected activity"
      />
  )
  return renderSprite(spriteFrames)
}

export default Sprite;