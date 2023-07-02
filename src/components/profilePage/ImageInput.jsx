import PropTypes from 'prop-types';

const ImageInput = ({ handleImageSelect, handleImageUpload }) => {
  return (
    <div className='flex flex-row items-center bg-main-bg-light px-8 py-4 text-int-white-main font-semibold rounded-xl shadow-xl'>
      <input type='file' accept='image/*' onChange={handleImageSelect} />
      <button
        className='border-2 px-6 py-2 rounded-xl shadow-2xl hover:bg-secondary-bg-black'
        onClick={handleImageUpload}
      >
        Upload
      </button>
    </div>
  );
};

ImageInput.propTypes = {
  handleImageSelect: PropTypes.func,
  handleImageUpload: PropTypes.func,
};

export default ImageInput;
