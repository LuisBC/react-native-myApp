import React from 'react';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';

const Animation = (props) => {
  const { pathAnimation, style, loop, autoPlay } = props;

  return (
    <LottieView
      source={pathAnimation}
      style={style}
      loop={loop}
      autoPlay={autoPlay}
    />
  );
};

Animation.propTypes = {
  pathAnimation: PropTypes.shape({}),
  style: PropTypes.shape({}),
  loop: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

Animation.defaultProps = { style: {}, pathAnimation: {} };

export default Animation;
