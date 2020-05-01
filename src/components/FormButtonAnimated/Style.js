import { StyleSheet } from 'react-native';
import { Color, Size } from '_styles';

const styles = StyleSheet.create({
  animationValid: {
    margin: -11,
  },
  animationError: {
    margin: -5,
  },
  spinner: {
    width: 45,
    height: 45,
  },
  buttonSpinnerAnimation: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    borderRadius: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: Color.WHITE,
  },
  text: {
    fontSize: Size.responsive(14),
  },
});

export default styles;
