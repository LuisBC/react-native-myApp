import React, { useState } from 'react';
import { useField } from 'formik';
import { View, ScrollView } from 'react-native';
import { Item, Input, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './Style';

const FormTextInput = (props) => {
  const { placeholder, fieldName, typeIcon, nameIcon, secureTextEntry } = props;

  const [field, meta] = useField(fieldName);

  const [buttonPressed, setButtonPressed] = useState(false);

  const setFirstCharToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View>
      <Item
        inlineLabel
        rounded
        style={
          meta.error && meta.touched
            ? [styles.item, styles.borderError]
            : styles.item
        }
      >
        {typeIcon && nameIcon && (
          <Icon type={typeIcon} name={nameIcon} style={styles.icon} />
        )}
        <Input
          style={styles.input}
          value={field.value}
          onChangeText={field.onChange(fieldName)}
          onBlur={field.onBlur(fieldName)}
          secureTextEntry={secureTextEntry || false}
          placeholder={placeholder}
        />
        {meta.error && meta.touched && (
          <Icon
            type="FontAwesome"
            name="times-circle"
            style={styles.iconError}
            onPress={() => setButtonPressed(!buttonPressed)}
          />
        )}
      </Item>
      {buttonPressed && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerText}
        >
          <Text style={styles.textError} numberOfLines={1}>
            {meta.error && meta.touched
              ? setFirstCharToUpperCase(meta.error)
              : ''}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

FormTextInput.propTypes = {
  placeholder: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  typeIcon: PropTypes.string.isRequired,
  nameIcon: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
};

FormTextInput.defaultProps = { placeholder: '', secureTextEntry: false };

export default FormTextInput;
