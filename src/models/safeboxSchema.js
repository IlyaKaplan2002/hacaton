import { object, string } from 'yup';

const safeboxSchema = object().shape({
  password: string()
    .min(6, 'Password should contain at least 6 characters')
    .required('Password is required'),
});

export default safeboxSchema;
