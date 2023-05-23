import {Field, Form, Formik} from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={() => {
      }}
    >
      <Form>
        <div className='flex flex-col border-2 items-center justify-center gap-5'>
          <div className='text-4xl font-bold italic'>USER-BLOG</div>
          <div>Welcome to User-Blog</div>

          <div>Users name or Email</div>
          <Field as='input' name='email' placeholder='Email'></Field>

          <div>Password</div>
          <Field as='input' name='password' placeholder='Password'></Field>
          <button
            className='bg-main-bg-light text-int-white-main px-10 py-2 rounded-xl text-xl hover:bg-secondary-bg-light'
            type='submit'
          >
            Sign in
          </button>
          <div className='flex flex-row gap-2'>
            <div>New User-Blog?</div>
            <div>Route to register page</div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
