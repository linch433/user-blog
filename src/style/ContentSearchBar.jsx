import { AiOutlineSearch } from 'react-icons/ai';

const ContentSearchBar = ({ ...otherProps }) => {
  return (
    <div className='relative mb-6 w-full md:w-[50%]'>
      <AiOutlineSearch className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3' />
      <input
        className='w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600'
        {...otherProps}
      />
    </div>
  );
};

export default ContentSearchBar;