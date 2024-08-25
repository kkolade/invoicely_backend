import { body } from 'express-validator';

const validateSignup = [
  body('username', 'Username must not be empty').notEmpty(),
  body('email', 'Email must not be empty').notEmpty(),
  body('email', 'Email must be a valid email address').isEmail(),
  body('password', 'Password must not be empty').notEmpty(),
  body('password', 'Password must be 6+ characters long').isLength({ min: 6 }),
  body('repeatPassword', 'Repeat Password must not be empty').notEmpty(),
  body('repeatPassword', 'Passwords do not match').custom(
    (value, { req }) => value === req.body.password,
  ),
];

const validateLogin = [
  body('emailOrUsername', 'Must contain Email or Username').notEmpty(),
  body('emailOrUsername').custom((value) => {
    // Check if the value is an email
    if (value.includes('@')) {
      // Validate as email
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        throw new Error('Must be a valid email address');
      }
    }
    return true;
  }),
  body('password', 'Password must not be empty').notEmpty(),
  body('password', 'Password must be 6+ characters long').isLength({ min: 6 }),
];

export { validateLogin, validateSignup };
