import { number, object, string } from 'yup';

const safeboxSchema = object().shape({
  amount: number()
    .typeError('Amount should be a number')
    .positive('Amount should be positive')
    .required('Amount is required'),
  password: string()
    .min(6, 'Password should contain at least 6 characters')
    .required('Password is required'),
});

export default safeboxSchema;
