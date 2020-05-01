import { StyleSheet } from 'react-native';
import { Color, Size } from '_styles';

const styles = StyleSheet.create({
  containerImage: {
    flex: 6,
    alignItems: 'center',
  },
  containerForm: {
    flex: 5.8,
    justifyContent: 'space-around',
  },
  containerRemenberForgot: {
    flex: 1.5,
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerSignGoogleFacebook: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImageButton: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerSignUp: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Color.WHITE,
    fontSize: Size.responsive(13),
  },
  textSignUp: {
    fontSize: Size.responsive(15),
    color: Color.WHITE,
    textDecorationLine: 'underline',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '40%',
    height: '100%',
  },
  touchableCheckBoxText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
