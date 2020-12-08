/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.get('/api/images', (req, res) => {
  const { id } = req.query;
  const queryString = `SELECT img_url FROM images WHERE listing_id=${id}`;
  db.query(queryString, (queryRes) => {
    console.log(queryRes);
    res.send(queryRes);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
