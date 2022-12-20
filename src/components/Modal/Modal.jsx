import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalElement = document.getElementById('modal');
class Modal extends Component {
  static defaultProps = {
    onClose: () => {},
  };
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
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
