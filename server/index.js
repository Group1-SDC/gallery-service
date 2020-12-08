/* eslint-disable no-console */
const express = require('express');
const { ItemImages } = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.get('/api/images', (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  ItemImages.find({}).where('id').equals(`${id}`)
    .then((imageObj) => {
      res.send(imageObj);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
