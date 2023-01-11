import * as Yup from 'yup';
export const loginValidationScheme = Yup.object({
  email: Yup.string().required().label('Email'),
  password: Yup.string()
    .required()
    .label('Password')
    .min(6, 'Password is too short'),
  gender: Yup.string(),
  city: Yup.string(),
  agree: Yup.bool().oneOf(
    [true],
    'You need to accept the terms and conditions'
  ).required(),
});
