import PropTypes from 'prop-types';

const SubmitButton = ({ children, ...otherProps }) => {
  return (
    <button
      className='bg-main-bg-light text-int-white-main px-10 py-2 rounded-xl text-xl hover:bg-secondary-bg-black shadow-xl'
      type='submit'
      {...otherProps}
    >
      {children}
    </button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubmitButton;
