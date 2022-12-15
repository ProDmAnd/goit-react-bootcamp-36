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

const MUIFormWithFormik = () => {
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
        validate={(values)=>{
            const errors = {};
            if (!values.email) {
                errors.email = 'Email is required field';
            }
            return errors;
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={props.values.email}
              error={Boolean(props.errors.email)}
              helperText={props.errors.email || 'e.g. example@email.com'}
              onChange={props.handleChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your email"
              helperText="Min 6 characters"
              value={props.values.password}
              onChange={props.handleChange}
              InputLabelProps={{ shrink: true }}
            />
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
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default MUIFormWithFormik;
