import React, { useState } from 'react';
import { Button, Text } from 'native-base';
import { Color } from '_styles';
import Spinner from '_components/Spinner';
import Animation from '_components/Animation';
import { Animations } from '_constants';
import PropTypes from 'prop-types';
import styles from './Style';

const FormButtonAnimated = (props) => {
  const {
    textButton,
    disabled,
    rounded,
    block,
    onPress,
    enableBackColor,
    disableBackColor,
    dataResponse,
  } = props;

  const [showSpinner, setShowSpinner] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const setStyles = () => {
    const style = [styles.button, { backgroundColor: disableBackColor }];

    if (!disabled) {
      style.push({ backgroundColor: enableBackColor });
    }
    if (showSpinner) {
      style.push(styles.buttonSpinnerAnimation, {
        backgroundColor: Color.PRIMARY,
      });
    }
    if (showAnimation) {
      style.push(styles.buttonSpinnerAnimation, {
        backgroundColor: dataResponse ? Color.VALID : Color.PRIMARY,
      });
    }
    return style;
  };

  const setContainButton = () => {
    if (showAnimation) {
      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
      return (
        <Animation
          style={dataResponse ? styles.animationValid : styles.animationError}
          pathAnimation={dataResponse ? Animations.VALID : Animations.ERROR}
          loop={false}
          autoPlay
        />
      );
    }
    if (showSpinner) {
      setTimeout(() => {
        if (dataResponse === true || dataResponse === false) {
          setShowAnimation(true);
          setShowSpinner(false);
        }
      }, 390);
      return <Spinner color={Color.WHITE} style={styles.spinner} />;
    }
    return <Text style={styles.text}>{textButton}</Text>;
  };

  return (
    <Button
      onPress={(data) => {
        setShowSpinner(true);
        onPress(data);
      }}
      rounded={rounded || false}
      disabled={disabled}
      textButton={textButton}
      style={setStyles()}
      block={block || false}
    >
      {setContainButton()}
    </Button>
  );
};

FormButtonAnimated.propTypes = {
  textButton: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  block: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  enableBackColor: PropTypes.string.isRequired,
  disableBackColor: PropTypes.string.isRequired,
  dataResponse: PropTypes.bool.isRequired,
};

FormButtonAnimated.defaultProps = {
  disabled: false,
  rounded: false,
  block: false,
};

export default FormButtonAnimated;
