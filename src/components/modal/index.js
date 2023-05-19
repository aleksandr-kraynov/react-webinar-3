import React from 'react';
import PropTypes from "prop-types";
import './style.css';

function Modal({ active, children }) {
  return (
    <div className={active ? 'Modal active' : 'Modal'}>
      <div className='Modal-content' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
};

export default React.memo(Modal);
