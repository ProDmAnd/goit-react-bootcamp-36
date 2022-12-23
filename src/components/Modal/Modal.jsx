import React, { Component, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

import { useMountedState } from 'react-use';

const modalElement = document.getElementById('modal');
class ModalClass extends Component {
  static defaultProps = {
    onClose: () => {},
    keyMap: {},
  };
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
      return;
    }
    if (Object.hasOwn(this.props.keyMap, event.code)) {
      const func = this.props.keyMap[event.code];
      func();
    }
  };

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleClose}>
        <div className={css.content}>{this.props.children}</div>
      </div>,
      modalElement
    );
  }
}

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
