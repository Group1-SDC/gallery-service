/* eslint-disable no-console */
const express = require('express');
require('newrelic');
const morgan = require('morgan');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.get('/api/images', (req, res) => { // :id
  const { id } = req.query; // ?
  const queryString = `SELECT img_url FROM images WHERE listing_id=${id}`;
  db.queryHandler(queryString, (queryRes) => {
    res.send(queryRes);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
