const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post(
  '/signup',
  check('name').not().isEmpty(),
  check('email').isEmail(),
  check('email').not().isEmpty(),
  check('password').isStrongPassword(),
  check('password').not().isEmpty(),
  check('password').isLength({ min: 8 }),
  usersControllers.signup
);

router.post(
  '/login',
  check('email').isEmail(),
  check('email').not().isEmpty(),
  check('password').not().isEmpty(),
  usersControllers.login
);

module.exports = router;
