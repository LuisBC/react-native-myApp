import { Toast } from 'native-base';
import { Color } from '_styles';
import styles from './Style';

const show = (text, duration, type) => {
  let colorText = Color.BLACK;

  if (type === 'success') {
    colorText = Color.VALID;
  }
  if (type === 'error') {
    colorText = Color.ERROR;
  }

  Toast.show({
    text,
    buttonText: 'Okay',
    duration,
    textStyle: [styles.text, { color: colorText }],
    buttonTextStyle: styles.buttonText,
    buttonStyle: styles.button,
    style: styles.toast,
  });
};

export { show };
