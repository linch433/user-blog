import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const NavigationLink = ({path, name}) => {
  return (
    <NavLink
      to={path}
      className={({isActive}) =>
        isActive ? 'text-int-white-main font-bold' : 'text-int-white-main hover:underline'
      }
    >
      {name}
    </NavLink>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

export default NavigationLink;
