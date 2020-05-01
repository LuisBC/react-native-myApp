import React from 'react';
import { View, Text } from 'react-native';
import { Animations } from '_constants';
import { Color } from '_styles';
import Animation from '../Animation';

const Splash = (props) => {
  return (
    <Animation
      style={{ flex: 1, backgroundColor: Color.PRIMARY }}
      pathAnimation={Animations.REACT}
      autoPlay
      loop={false}
    />
  );
};

export default Splash;
