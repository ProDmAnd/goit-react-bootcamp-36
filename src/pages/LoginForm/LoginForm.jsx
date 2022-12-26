import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';

import { CITY_OPTIONS, GENDER_OPTIONS } from 'constants/loginForm';
import { Form, Formik } from 'formik';
import React from 'react';
import { loginValidationScheme } from './loginValidation';

const LoginForm = () => {
  const textFields = [
    {
      key: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      helperText: 'e.g. example@email.com',
    },
    {
      key: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
  ];

  return (
    <Paper style={{ padding: '1rem' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          agree: false,
          gender: GENDER_OPTIONS.skip,
          city: CITY_OPTIONS.Kyiv,
        }}
        validationSchema={loginValidationScheme}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {textFields.map(({ key, label, placeholder, helperText }) => (
              <TextField
                key={key}
                variant="outlined"
                label={label}
                name={key}
                type={key}
                placeholder={placeholder}
                value={props.values[key]}
                error={Boolean(props.errors[key])}
                helperText={props.errors[key] || helperText}
                onChange={props.handleChange}
                InputLabelProps={{ shrink: true }}
              />
            ))}

            <FormControlLabel
              control={<Checkbox />}
              label="I agree with Terms & Conditions"
              name="agree"
              checked={props.values.agree}
              onChange={props.handleChange}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={props.values.gender}
                name="gender"
                onChange={props.handleChange}
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
                value={props.values.city}
                name="city"
                label="City"
                onChange={props.handleChange}
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
            <Button
              type="submit"
              variant="contained"
              disabled={Object.values(props.errors).some(Boolean)}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default LoginForm;
