import Header from './Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="my-2 text-int-black-main">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
