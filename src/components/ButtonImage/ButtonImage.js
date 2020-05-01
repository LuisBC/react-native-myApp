import React from 'react';
import { Image } from 'react-native';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './Style';

const ButtonImage = (props) => {
  const { colorButton, pathImage, textButton, onPress } = props;

  return (
    <Button
      onPress={onPress}
      style={[styles.button, { backgroundColor: colorButton }]}
    >
      <Image source={pathImage} style={styles.image} />
      <Text style={styles.text}>{textButton}</Text>
    </Button>
  );
};

ButtonImage.propTypes = {
  colorButton: PropTypes.string.isRequired,
  pathImage: PropTypes.number.isRequired,
  textButton: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ButtonImage.defaultProps = { onPress: () => {} };

export default ButtonImage;
