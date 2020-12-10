const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const LogData = require('./data/logdata');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/loggingApi/logging/getLogs', (req, res) => {
  console.log('getLogs');
  const data = req.body;
  console.log(data);
  fs.appendFile('data/test.log', JSON.stringify(data) + '\n', (err) => {
    if (err) console.log(err);
  });
});
  
app.get('/loggingApi/logging/getData', (req, res) => {
  console.log('getData');
  const data = new LogData('1','2','3','4','5');
  res.json(data);
});

app.listen(3000, function () {
  console.log('Logger app listening on port 3000!');
});
