import PropTypes from 'prop-types';

const TextWithTitle = ({ title, text }) => {
  if (text)
    return (
      <div className='truncate'>
        <span className='font-semibold'>{title}: </span>
        {text}
      </div>
    );
};

TextWithTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default TextWithTitle;
