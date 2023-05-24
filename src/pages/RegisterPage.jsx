import {Field, Form, Formik} from 'formik';
import {Link} from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const initialValuesForLogin = {
  email: '',
  password: '',
  name: '',
  extra_details: '',
  skills: '',
  profession: '',
  details: ''
}

const onSubmit = () => {
  console.log('submit click')
}

const RegisterPage = () => {
  return (
    <Formik initialValues={initialValuesForLogin} onSubmit={onSubmit}>
      <Form>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col gap-5 items-center pt-5 w-full">
            <div className="text-4xl font-bold italic">USER-BLOG</div>
            <div>Welcome to User-Blog</div>

            <div className='flex flex-col w-full gap-3 px-12 md:w-1/2 lg:w-3/12'>
              <Field as={CustomInput} name="email" placeholder="Email"/>
              <Field as={CustomInput} name="password" placeholder="Password"/>
              <Field as={CustomInput} name="name" placeholder="Name"/>
              <Field as={CustomInput} name="extra_details" placeholder="Extra details"/>
              <Field as={CustomInput} name="skills" placeholder="Skills"/>
              <Field as={CustomInput} name="profession" placeholder="Profession"/>
              <Field as={CustomInput} name="details" placeholder="Details"/>

            </div>

            <button
              className="bg-main-bg-light text-int-white-main px-10 py-2 rounded-xl text-xl hover:bg-secondary-bg-black "
              type="submit"
            >
              Sign up
            </button>

            <div className="flex flex-row gap-2">
              <div>Already User-Blog?</div>
              <Link to="/login" className="text-blue-900 cursor-pointer">
                Sign in now!
              </Link>
            </div>

          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterPage;
