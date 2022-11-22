const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const response = require('../helpers/standardResponse');

exports.login = (req, res) => {
  const { email, password } = req.body;
  userModel.getUserByEmail(email, (err, result) => {
    if (result.rows.length <= 0) {
      return response(res, 'User not found', null, null, 400);
    }
    const user = result.rows[0];

    if (password == user.password) {
      const token = jwt.sign({ id: user.id }, 'mYb4ck3nd');
      return response(res, 'Login success', { token, email: user.email, username: user.username });
    } else {
      return response(res, 'Email or password not match', null, null, 404);
    }
  });
};
