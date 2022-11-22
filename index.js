const express = require('express');
var cors = require('cors');

const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('assets'));

app.use(cors());

app.get('/', (req, res) => {
  return res.json({
    succes: true,
    message: 'This is Home Page :)',
  });
});

app.use('/', require('./src/routes'));

app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

app.listen(3313, () => {
  console.log(`App is running on port 3313`);
});
