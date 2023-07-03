import { cloneElement, useRef } from 'react';
import useOutsideAlerter from './useOutsideAlerter.js';
import PropTypes from 'prop-types';

function Modal({
  active,
  closeModal,
  children,
  width = 'w-3/4',
  height = 'h-3/4',
  roundStyle,
  isSidePanel,
}) {
  const container = useRef(null);
  useOutsideAlerter({ ref: container, callback: () => closeModal() });

  return (
    <>
      {active && (
        <div className='flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-20'>
          <div
            ref={container}
            className={
              isSidePanel
                ? `bg-[#fafafa] h-screen w-[50vw] absolute right-0 overflow-auto`
                : `bg-white md:${width} ${height} ${roundStyle ? roundStyle : 'rounded-2xl'} 
                                        shadow shadow-int-blue-link w-[95%]`
            }
            style={{ animation: `${isSidePanel ? 'modalSlide 0.5s ease-out' : ''}` }}
          >
            {cloneElement(children)}
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  active: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  roundStyle: PropTypes.string,
  isSidePanel: PropTypes.bool,
};

export default Modal;
