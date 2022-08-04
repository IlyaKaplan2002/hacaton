import { useFormik } from 'formik';
import React from 'react';
import InputField from 'components/InputField';
import Form from 'components/Form';
import { depositSchema } from 'models';

const initialValues = { amount: '' };

const DepositForm = ({ className, wallet }) => {
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: initialValues,
    initialErrors: initialValues,
    validationSchema: depositSchema,
    onSubmit,
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className={className}
      title="Deposit funds"
      buttonTitle="Deposit"
      buttonDisabled={!formik.touched.amount || formik.errors.amount}
    >
      <InputField
        label="Enter the amount, SOL"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.amount}
        value={formik.values.amount}
        name="amount"
      />
    </Form>
  );
};

export default DepositForm;
