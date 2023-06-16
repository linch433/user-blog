import PropTypes from 'prop-types';

const TruncatedText = ({ text }) => {
  return (
    <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
      {text}
    </div>
  );
};

TruncatedText.propTypes = {
  text: PropTypes.string,
};

export default TruncatedText;
