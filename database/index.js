const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: process.env.IP || '',
  database: 'gallery',
  password: process.env.PASSWORD || '',
  port: 5432,
});

pool.connect();

const queryHandler = (queryString, cb) => {
  pool
    .query(queryString)
    .then((res) => {
      cb(res.rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  queryHandler,
};
