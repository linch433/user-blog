import { useEffect } from 'react';
import PropTypes from 'prop-types';

function useOutsideAlerter({ ref, callback }) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

useOutsideAlerter.propTypes = {
  ref: PropTypes.any,
  callback: PropTypes.func,
};

export default useOutsideAlerter;