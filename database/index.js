const { Pool } = require('pg');

const pool = new Pool({
  user: 'lukehatcher',
  host: 'localhost',
  database: 'gallery',
  password: '',
  port: 5432,
});

pool.connect();

const query = (queryString, cb) => {
  pool.query(queryString)
    .then((res) => {
      cb(res.rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  query,
};
