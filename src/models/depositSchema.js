import { number, object } from 'yup';

const depositSchema = object().shape({
  amount: number()
    .typeError('Amount should be a number')
    .positive('Amount should be positive')
    .required('Amount is required'),
});

export default depositSchema;
