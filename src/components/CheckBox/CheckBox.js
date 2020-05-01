import React from 'react';
import { CheckBox } from 'native-base';
import PropTypes from 'prop-types';
import styles from './Style';

const CheckBoxComponent = (props) => {
  const { checked, color } = props;
  return <CheckBox checked={checked} color={color} style={styles.checkbox} />;
};

CheckBoxComponent.propTypes = {
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default CheckBoxComponent;
