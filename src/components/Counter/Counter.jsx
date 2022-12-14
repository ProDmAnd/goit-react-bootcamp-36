import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';
import Button from 'components/Button/Button';

class Counter extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    increment: PropTypes.number,
  };

  static defaultProps = {
    initialValue: 0,
    increment: 1,
  };

  state = {
    clickedCount: 0,
    value: this.props.initialValue,
    incrementBy: this.props.increment,
  };

  increment = (clickedCount = 0) => {
    if (clickedCount > 10) return;
    this.setState(
      state => ({ value: state.value + 1, clickedCount }),
      () => console.log('after state update', this.state.value)
    );
  };

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }));
  };

  changeIncrement = event => {
    const { value } = event.target;

    if (Number.isNaN(Number.parseInt(value))) {
      return;
    }

    this.setState({ incrementBy: Number.parseInt(value) });
  };

  submit = e => {
    e.stopPropagation();
    e.preventDefault();

    console.log(this.state.incrementBy);
  };

  prevent = e => {
    console.log('PREVENT');
  };

  updateIncrementBy = incrementBy => this.setState({ incrementBy });

  render() {
    return (
      <div className={css.container}>
        <h2>Counter value {this.state.value}</h2>
        <h4>Increment value {this.state.incrementBy}</h4>
        <h5>Clicked: {this.state.clickedCount}</h5>
        <input value={this.state.incrementBy} onChange={this.changeIncrement} />
        <Button onClick={this.increment} clicked={this.state.clickedCount} success>
          Increment
        </Button>
        <button onClick={this.decrement}>Decrement</button>
        <a href="reactjs.org" onClick={this.prevent}>
          React
          <button onClick={this.submit}>Submit Value</button>
        </a>
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 1,
  increment: 1,
};

export default Counter;
