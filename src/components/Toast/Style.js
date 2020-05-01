import { StyleSheet } from 'react-native';
import { Color, Size } from '_styles';

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: Size.responsive(14),
  },
  buttonText: {
    color: Color.WHITE,
    fontSize: Size.responsive(13),
  },
  button: {
    height: '95%',
    backgroundColor: Color.VALID,
    marginRight: 2,
    borderWidth: 1,
  },
  toast: {
    paddingHorizontal: 10,
    backgroundColor: Color.WHITE,
    marginBottom: 20,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default styles;
