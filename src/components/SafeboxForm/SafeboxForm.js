import { useFormik } from 'formik';
import React, { useState } from 'react';
import InputField from 'components/InputField';
import Form from 'components/Form';
import { safeboxSchema } from 'models';
import { signature } from 'helpers';
import { Notify } from 'notiflix';
import { Transaction } from '@solana/web3.js';

const safeboxInitialValues = { password: '' };

const SafeboxForm = ({ className, wallet }) => {
  //   const [data, setData] = useState({ publicKey: '', signature: '' });

  const onSafeboxSubmit = async (values, { resetForm }) => {
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

  const safeboxFormik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: safeboxInitialValues,
    initialErrors: safeboxInitialValues,
    validationSchema: safeboxSchema,
    onSubmit: onSafeboxSubmit,
  });

  return (
    <Form
      onSubmit={safeboxFormik.handleSubmit}
      className={className}
      title="Create a safebox"
      buttonTitle="Create"
      buttonDisabled={
        !safeboxFormik.touched.password || safeboxFormik.errors.password
      }
    >
      <InputField
        label="Enter the password"
        type="password"
        onChange={safeboxFormik.handleChange}
        onBlur={safeboxFormik.handleBlur}
        error={safeboxFormik.errors.password}
        value={safeboxFormik.values.password}
        name="password"
      />
    </Form>
  );
};

export default SafeboxForm;
