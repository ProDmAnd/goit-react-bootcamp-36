import React, { Component, PureComponent } from 'react';
import css from './ControlledFrom.module.css';
import Button from 'components/Button/Button';
import { CITY_OPTIONS, GENDER_OPTIONS } from 'constants/loginForm';
import CitySelect from 'components/CitySelect/CitySelect';
import ControlledCitySelect from 'components/ControlledCitySelect/ControlledCitySelect';
import CityFinder from 'components/CityFinder/CityFinder';
import WarehouseFinder from 'components/WarehouseFinder/WarehouseFinder';
import WarehouseTypeSelect from 'components/WarehouseTypeSelect/WarehouseTypeSelect';
import { useState } from 'react';
import { useEffect } from 'react';

class ControlledForm1 extends Component {
  emailField = 'email';
  agreeField = 'agree';
  state = {
    email: '',
    password: '',
    agree: false,
    sex: GENDER_OPTIONS.skip,
    city: CITY_OPTIONS.Kyiv,
    warehouseType: '',
    deliveryRef: '',
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
    console.log(this.state.email);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Form componentDidUpdate');
    if (prevState.email !== this.state.email) {
      console.log(this.state.email);
    }
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

  selectWarehouseType = warehouseType => {
    this.setState({ warehouseType });
  };

  selectPostCity = deliveryRef => {
    this.setState({ deliveryRef });
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
          <h3>Вибір відділення нової пошти</h3>
        </div>
        <div>
          <WarehouseTypeSelect onSelect={this.selectWarehouseType} />
        </div>
        <div>
          <CityFinder onSelect={this.selectPostCity} />
        </div>
        <div>
          <WarehouseFinder
            warehouseType={this.state.warehouseType}
            deliveryRef={this.state.deliveryRef}
          />
        </div>
        <Button disabled={!canSubmit} type="submit">
          Log in
        </Button>
      </form>
    );
  }
}

const ControlledForm = ({ withCheckbox }) => {
  const emailId = 'email';
  // in Class Component: const [this.state.value, this.setState({ value })]
  // const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  // componentDidMout()
  useEffect(valueInUseEffect => {
    // console.log('valueInUseEffect', valueInUseEffect);
    console.log('componentDidMout work', new Date().toISOString());

    return valueInUnmount => {
      console.log('unmount', valueInUnmount);
    };
  }, []);

  useEffect(() => {
    // if (email.includes('@')) {
    //   setEmailError('');
    //   return;
    // }
    // setEmailError('Email is invalid');
    /*
      componentDidMount() {
        console.log(this.state.email);
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
          console.log(this.state.email);
        }
      }
    */
    console.log('useEffect email', email, /\w*[@]\w*/.test(email));
  }, [email]);

  useEffect(() => {
    /*
      componentDidMount() {
        console.log(this.state.passwrod);
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.password !== this.state.password) {
          console.log(this.state.password);
        }
      }
     */
    // console.log('useEffect password', password);
    return () => {
      console.log('unmount in password useEffect');
    };
  }, [password]);

  const submit = ({ target: { elements } }) => {
    // a lot of logic....
  };

  const errorEmail = email.includes('@') ? '' : 'Email is invalid';
  const passwordError = password.length < 6 ? 'Password is too short' : '';
  return (
    <form className={css.form} onSubmit={submit}>
      <div className={css.field}>
        <label htmlFor={emailId}>Email</label>
        <input
          id={emailId}
          name="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <p>{errorEmail}</p>
      </div>
      <div className={css.field}>
        <label>Password</label>
        <input
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <p>{passwordError}</p>
      </div>

      {withCheckbox && (
        <div className={css.field}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              name="agree"
              onChange={setChecked}
              style={{ marginRight: 6 }}
            />
            I agree with Terms & Conditions
          </label>
        </div>
      )}
    </form>
  );
};

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
