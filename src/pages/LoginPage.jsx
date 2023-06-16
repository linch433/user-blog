import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { initialValuesForLogin } from '../features/pages/login/initialValues.js';
import { loginValidationScheme } from '../features/pages/login/validationScheme.js';
import { useLoginMutation } from '../app/store/features/api.js';

import SubmitButton from '../style/SubmitButton';
import RedirectLink from '../style/RedirectLink.jsx';
import InputField from '../style/InputField.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const onSubmit = async (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await login(userData);
      localStorage.setItem('AUTH_TOKEN', response.data.token);

      toast.success('Welcome to User-Blog');
      navigate('/');
    } catch {
      toast.error('Login or password are incorrect!');
    }
  };

  return (
    <Formik
      initialValues={initialValuesForLogin}
      validationSchema={loginValidationScheme}
      onSubmit={onSubmit}>
      <Form>
        <div className='flex flex-row items-center justify-center'>
          <div className='flex flex-col gap-5 items-center pt-5 w-full'>
            <div className='text-4xl font-bold italic'>USER-BLOG</div>
            <div className='font-pacifico pt-5'>Welcome to User-Blog</div>
            <div className='flex flex-col w-full gap-3 px-12 md:w-[50%] lg:w-[40%]'>
              <InputField name='email' placeholder='Email' />
              <InputField name='password' placeholder='Password' />
            </div>
            <SubmitButton>Sign In</SubmitButton>
            <RedirectLink msg={'New in User-Blog?'} linkToPath={'/register'} linkTitle={'Register now!'} />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginPage;
