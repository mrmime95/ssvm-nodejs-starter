const express = require('express');
const {
  plus,
  minus,
  times,
  div,
} = require('../pkg/ssvm_nodejs_starter_lib.js');

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public/build'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/plus', function (req, res) {
  let { numberOne, numberTwo } = req.body;
  res.json(plus([parseFloat(numberOne), parseFloat(numberTwo)]));
});
app.post('/minus', function (req, res) {
  let { numberOne, numberTwo } = req.body;
  res.json(minus([parseFloat(numberOne), parseFloat(numberTwo)]));
});
app.post('/times', function (req, res) {
  let { numberOne, numberTwo } = req.body;
  res.json(times([parseFloat(numberOne), parseFloat(numberTwo)]));
});
app.post('/div', function (req, res) {
  let { numberOne, numberTwo } = req.body;
  res.json(div([parseFloat(numberOne), parseFloat(numberTwo)]));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
