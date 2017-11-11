import React from 'react';
import {View} from 'react-native';
import SpriteAnimation from 'react-native-animated-sprite';
import styles from './styles';

export default (props) => {
  /* 
  * conditional: <Any> Passed to frame selector on each rerender, changing this triggers rerender
  * frameSelector: <Function> Function that is called on each rerender to select animation frames
  * style: <StyleSheet.Object> optional style override
  */
  const {
    height,
    width,
    frames,
    frameSelector,
    conditional,
    style,
    loop,
    alt,
  } = props;
  const spriteFrames = frameSelector(conditional);
  
  const renderSprite = () => (
      <SpriteAnimation
        sprite={{
          // size: {height, width},
          frames: frames,
          animationIndex: spriteFrames
        }}
        loopAnimation={loop}
        coordinates={{top: (style && style.top) || 0 , left:  (style && style.left) || 0 }}
        animationFrameIndex={spriteFrames}
        size={{height, width}}
        style={{...style}}
        alt={alt}
      />
  );
  console.log('rend sprite heigh', height, width);
  return renderSprite(spriteFrames)
}
