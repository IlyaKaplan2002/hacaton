import { useFormik } from 'formik';
import React from 'react';
import InputField from 'components/InputField';
import Form from 'components/Form';
import { withdrawSchema } from 'models';
import { Notify } from 'notiflix';
import { signature } from 'helpers';
import { Transaction } from '@solana/web3.js';

const initialValues = { amount: '', password: '' };

const WithdrawForm = ({ className, wallet }) => {
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    if (!wallet) {
      Notify.failure('Please connect wallet firstly');
      return;
    }
    const { error, data } = await signature(values.password);
    console.log(error);
    console.log(data);
    if (error) {
      Notify.failure(error);
      return;
    }
    if (data) {
      //   setData(data);
      Notify.success('Your Safebox created');
    }
    const transaction = new Transaction({
      feePayer: data.publicKey,
      signatures: [data.signature],
    });
    console.log(transaction);
    resetForm();
  };

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: initialValues,
    initialErrors: initialValues,
    validationSchema: withdrawSchema,
    onSubmit,
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className={className}
      title="Withdraw funds"
      buttonTitle="Deposit"
      buttonDisabled={
        !formik.touched.amount || formik.errors.amount || formik.errors.password
      }
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
      <InputField
        label="Enter the password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        value={formik.values.password}
        name="password"
      />
    </Form>
  );
};

export default WithdrawForm;
