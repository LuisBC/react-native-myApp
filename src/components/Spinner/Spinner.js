import React from 'react';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';

const SpinnerComponent = (props) => {
  const { color, style } = props;

  return <Spinner color={color} style={style} />;
};

SpinnerComponent.propTypes = {
  color: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

SpinnerComponent.defaultProps = { style: {} };

export default SpinnerComponent;
