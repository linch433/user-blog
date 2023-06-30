import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PagePreLoader } from '../../style/PreLoader/PreLoader.jsx';

const DataStatusChecker = ({ isLoading, isFetching, isError, error, children }) => {
  const navigate = useNavigate();

  if (isLoading || isFetching) return <PagePreLoader />;

  if (error?.status === 403) {
    localStorage.removeItem('AUTH_TOKEN');
    navigate('/login');
    return null;
  }

  if (isError) return <div className='flex items-center justify-center'>Error</div>;

  return children;
};

DataStatusChecker.propTypes = {
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.any,
  children: PropTypes.any,
};

export default DataStatusChecker;
