import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { initialValuesForRegister } from '../features/pages/register/initialValues.js';
import { registerValidationScheme } from '../features/pages/register/validationScheme.js';
import { useCreateUserMutation } from '../app/store/features/users.api.js';
import SubmitButton from '../style/SubmitButton.jsx';
import RedirectLink from '../style/RedirectLink.jsx';
import InputField from '../style/InputField.jsx';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const onSubmit = async (values) => {
    const registerData = {
      email: values.email,
      password: values.password,
      name: values.name,
      extra_details: values.extra_details,
      skills: values.skills,
      profession: values.profession,
      details: values.details,
    };

    try {
      await createUser(registerData);
      toast.success('Your user register successfully!');
      navigate('/login');
    } catch {
      toast.error('Something went wrong!');
    }
  };

  return (
    <Formik
      initialValues={initialValuesForRegister}
      validationSchema={registerValidationScheme}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='flex flex-row items-center justify-center'>
          <div className='flex flex-col gap-5 items-center pt-5 w-full'>
            <div className='text-4xl font-bold italic'>USER-BLOG</div>
            <div className='font-pacifico pt-5'>Welcome to User-Blog</div>
            <div className='flex flex-col w-full gap-3 px-12 md:w-[50%] lg:w-[40%]'>
              <InputField name='email' placeholder='Email' />
              <InputField name='password' placeholder='Password' />
              <InputField name='name' placeholder='Name' />
              <InputField name='extra_details' placeholder='Extra details' />
              <InputField name='skills' placeholder='Skills' />
              <InputField name='profession' placeholder='Profession' />
              <InputField name='details' placeholder='Details' />
            </div>
            <SubmitButton>Sign Up</SubmitButton>
            <RedirectLink
              msg={'Already in User-Blog?'}
              linkToPath={'/login'}
              linkTitle={'Login now!'}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterPage;
