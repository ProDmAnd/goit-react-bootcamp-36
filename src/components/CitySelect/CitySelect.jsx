import { CITY_OPTIONS } from 'constants/loginForm';
import React, { Component } from 'react';

class CitySelect extends Component {
  state = {
    city: this.props.defaultCity || '',
  };

  handleChangeValue = event => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    this.props.onSelect(event.target.value);
  };

  render() {
    const { city } = this.state;
    return (
      <select value={city} name="city" onChange={this.handleChangeValue}>
        {Object.keys(CITY_OPTIONS).map(key => {
          const value = CITY_OPTIONS[key];
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    );
  }
}

export default CitySelect;
