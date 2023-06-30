import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

import CustomInput from '../components/CustomInput.jsx';

const InputField = ({ name, placeholder }) => {
  return (
    <div>
      <Field as={CustomInput} name={name} placeholder={placeholder} />
      <ErrorMessage name={name}>
        {(msg) => <div className='text-int-error'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
