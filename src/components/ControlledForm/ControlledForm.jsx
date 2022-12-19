import React, { Component, PureComponent } from 'react';
import css from './ControlledFrom.module.css';
import Button from 'components/Button/Button';
import { CITY_OPTIONS, GENDER_OPTIONS } from 'constants/loginForm';
import CitySelect from 'components/CitySelect/CitySelect';
import ControlledCitySelect from 'components/ControlledCitySelect/ControlledCitySelect';

class ControlledForm extends Component {
  emailField = 'email';
  agreeField = 'agree';
  state = {
    email: '',
    password: '',
    agree: false,
    sex: GENDER_OPTIONS.skip,
    city: CITY_OPTIONS.Kyiv,
  };

  // static getDerivedStateFromProps(props, state) {
  //   if (props.city === CITY_OPTIONS.Kyiv) {
  //     return {
  //       email: '',
  //       password: '',
  //       agree: false,
  //       sex: GENDER_OPTIONS.skip,
  //       city: CITY_OPTIONS.Kyiv,
  //     };
  //   }

  //   return null;
  // }

  componentDidMount() {
    console.log('Form Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Form componentDidUpdate', prevProps, this.props);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChangeValue = event => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeChecked = event => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleChangeAgree = event => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
    // additional logic;
  };

  render() {
    const { email, password, agree, sex, city } = this.state;
    const canSubmit =
      email && password.length > 5 && agree && sex !== GENDER_OPTIONS.skip;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.field}>
          <label htmlFor={this.emailField}>Email</label>
          <input
            id={this.emailField}
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onInput={this.handleChangeValue}
          />
        </div>
        <div className={css.field}>
          <label htmlFor={this.emailField}>Password</label>
          <input
            name="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onInput={this.handleChangeValue}
          />
        </div>

        <div className={css.field}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              name="agree"
              onChange={this.handleChangeChecked}
              style={{ marginRight: 6 }}
            />
            I agree with Terms & Conditions
          </label>
        </div>
        <div className={css.field}>
          {Object.keys(GENDER_OPTIONS).map(key => {
            const value = GENDER_OPTIONS[key];

            return (
              <label key={key}>
                <input
                  type="radio"
                  checked={sex === value}
                  value={value}
                  name="sex"
                  onChange={this.handleChangeValue}
                />
                {' ' + value.toUpperCase()}
              </label>
            );
          })}
        </div>
        <div>
          <CitySelect
            defaultCity={CITY_OPTIONS.Kyiv}
            onSelect={city => this.setState({ city })}
          />
        </div>
        <div>
          {city !== CITY_OPTIONS.Lviv && <ControlledCitySelect city={city} />}
        </div>
        <Button disabled={!canSubmit} type="submit">
          Log in
        </Button>
      </form>
    );
  }
}

export default ControlledForm;

/*
const object = {
  email: 'asdasd@mail',
  password: '123123',
  agree: true,
  0: false,
};

const emailKey = 'email';
*/
