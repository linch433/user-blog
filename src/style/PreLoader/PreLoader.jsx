import './PreLoader.css';

const PreLoader = () => {
  return <div className='custom-loader'></div>;
};

export default PreLoader;

export const PagePreLoader = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-64px)]'>
      <PreLoader />
    </div>
  );
};
