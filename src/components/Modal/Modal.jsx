import React, { Component } from 'react';
import css from './Modal.module.css';

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
    return (
      <div className={css.overlay} onClick={this.handleClose}>
        <div className={css.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
