import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import FormTextInput from '_components/FormTextInput';
import FormButtonAnimated from '_components/FormButtonAnimated';
import PropTypes from 'prop-types';
import { Color } from '_styles';

const BracketFormBody = (props) => {
  const {
    submitForm,
    isValid,
    isSubmitting,
    validateForm,
  } = useFormikContext();

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const submitDisabled = !isValid || isSubmitting;

  const { dataResponse } = props;

  return (
    <>
      <FormTextInput
        fieldName="email"
        placeholder="Email"
        typeIcon="FontAwesome5"
        nameIcon="user-alt"
      />
      <FormTextInput
        fieldName="password"
        placeholder="Password"
        typeIcon="FontAwesome5"
        nameIcon="key"
        secureTextEntry
      />
      <FormButtonAnimated
        rounded
        onPress={submitForm}
        disabled={submitDisabled}
        disableBackColor={Color.SECONDARY}
        enableBackColor={Color.VALID}
        block
        dataResponse={dataResponse}
        textButton="LOGIN"
      />
    </>
  );
};

BracketFormBody.propTypes = {
  dataResponse: PropTypes.bool.isRequired,
};

export default BracketFormBody;
