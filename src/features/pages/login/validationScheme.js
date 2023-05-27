import * as yup from 'yup';

export const loginValidationScheme = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 5 characters or over')
    .required('Required')
});
