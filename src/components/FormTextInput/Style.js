import { StyleSheet } from 'react-native';
import { Color, Size } from '_styles';

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.WHITE,
  },
  icon: {
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.WHITE,
    fontSize: Size.responsive(16),
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: Color.PRIMARY,
  },
  iconError: {
    color: Color.ERROR,
    position: 'absolute',
    right: 5,
    fontSize: Size.responsive(19),
  },
  input: {
    marginRight: 30,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: Size.responsive(15),
  },
  containerText: {
    marginHorizontal: Size.responsive(35),
    marginVertical: Size.responsive(5),
    marginBottom: Size.responsive(10),
  },
  textError: {
    color: Color.ERROR,
    textShadowColor: Color.SECONDARY,
    textShadowRadius: 1,
    fontSize: Size.responsive(14),
  },
  borderError: {
    borderColor: Color.ERROR,
  },
});

export default styles;
