import * as yup from 'yup';

export const registerValidationScheme = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters or over')
    .required('Required'),
  name: yup.string(),
  extra_details: yup.string(),
  skills: yup.string(),
  profession: yup.string(),
  details: yup.string(),
})
