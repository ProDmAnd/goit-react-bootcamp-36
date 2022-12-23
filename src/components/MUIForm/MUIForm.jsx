import styled from '@emotion/styled';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  styled as muiStyled,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { CITY_OPTIONS, GENDER_OPTIONS } from 'constants/loginForm';
import React, { Component } from 'react';
import requestImitator from 'utils/requestImitator';
import { array } from 'yup/lib/locale';
import css from './MUIForm.module.css';

const Box = styled.div`
  padding: 1rem;
  border-radius: 4px;
  background-color: #3333;
`;

const CustomizedTextField = muiStyled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
  },
});

const INITIAL_STATE = {
  email: '',
  password: '',
  agree: false,
  gender: GENDER_OPTIONS.skip,
  city: CITY_OPTIONS.Kyiv,
};

class MUIForm extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update', prevProps, this.props);
  }

  handleChangeFabric = key => event => {
    const { name } = event.target;
    const value = event.target[key];
    this.setState({ [name]: value });
  };

  handleChangeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeChecked = event => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const request = await requestImitator(this.state);
    console.log(request);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password, agree, gender, city } = this.state;
    const canSubmit =
      email && password.length > 5 && agree && gender !== GENDER_OPTIONS.skip;

    const callbackMap = value => value * 2;
    function arrayPow(pow, array = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      return array.map(value => Math.pow(value, pow));
    }

    return (
      <Paper style={{ padding: '1rem' }}>
        <form className={css.form}>
          <CustomizedTextField
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            helperText="e.g. email@mail.com"
            onChange={this.handleChangeValue}
            InputLabelProps={{ shrink: true }}
          />
          <CustomizedTextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your email"
            helperText="Min 6 characters"
            value={password}
            // onChange={this.handleChangeFabric('value') || event => {
            //   const { name } = event.target;
            //   const value = event.target['value'];
            //   this.setState({ [name]: value });
            // }; }
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree with Terms & Conditions"
            name="agree"
            checked={agree}
            onChange={this.handleChange('checked')}
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={gender}
              name="gender"
              onChange={this.handleChangeValue}
            >
              {Object.keys(GENDER_OPTIONS).map(key => {
                const value = GENDER_OPTIONS[key];
                return (
                  <FormControlLabel
                    key={key}
                    style={{ textTransform: 'capitalize' }}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormControl>
            <InputLabel id="city-field">City</InputLabel>
            <Select
              id="city-field"
              value={city}
              name="city"
              label="City"
              onChange={this.handleChangeValue}
              style={{ textTransform: 'capitalize' }}
            >
              {Object.keys(CITY_OPTIONS).map(key => {
                const value = CITY_OPTIONS[key];
                return (
                  <MenuItem
                    style={{ textTransform: 'capitalize' }}
                    key={key}
                    value={value}
                  >
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Box style={{ backgroundColor: agree ? '#0f03' : '#f003' }}>
            User {agree ? 'agreed' : 'disagreed'}
          </Box>
          <Button type="submit" variant="contained" disabled={!canSubmit}>
            Sign In
          </Button>
        </form>
      </Paper>
    );
  }
}

export default MUIForm;
