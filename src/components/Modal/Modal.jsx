import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalElement = document.getElementById('modal');
class Modal extends Component {
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

export default Modal;
