import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalElement = document.getElementById('modal');

/** @type {React.FC<{onClose: () => void, keyMap?: Record<string, () => void>}>} */
const Modal = ({ onClose = () => {}, keyMap = {}, children }) => {
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
        return;
      }
      if (Object.hasOwn(keyMap, event.code)) {
        const func = keyMap[event.code];
        func();
      }
    };
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.content}>{children}</div>
    </div>,
    modalElement
  );
};

export default Modal;
