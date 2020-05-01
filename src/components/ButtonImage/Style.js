import { StyleSheet } from 'react-native';
import { Size } from '_styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 3,
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    left: 2,
    width: '25%',
    height: 40,
  },
  text: {
    position: 'absolute',
    right: 0,
    width: '75%',
    marginRight: '1%',
    textAlign: 'center',
    textTransform: 'capitalize',
    textAlignVertical: 'center',

    fontSize: Size.responsive(13.5),
  },
});

export default styles;
