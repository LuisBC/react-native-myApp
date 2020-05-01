import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import BracketFormBody from '_components/BracketFormBody';

const BracketForm = (props) => {
  const bracketSchema = object().shape({
    email: string().required('please enter a email'),
    password: string().required('please enter a password').min(4),
  });
  const { onSubmit, dataResponse } = props;

  return (
    <Formik
      validationSchema={bracketSchema}
      onSubmit={onSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      <BracketFormBody dataResponse={dataResponse} />
    </Formik>
  );
};

BracketForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataResponse: PropTypes.bool.isRequired,
};

export default BracketForm;
