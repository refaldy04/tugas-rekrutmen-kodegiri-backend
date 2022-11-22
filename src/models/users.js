const db = require('../helpers/db');

exports.getUserByEmail = (email, cb) => {
  console.log(email);
  db.query('SELECT * FROM users WHERE email=$1 ', [email], (err, res) => {
    cb(err, res);
  });
};
