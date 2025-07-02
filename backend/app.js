const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: 'db', // Docker Compose service name
  user: 'postgres',
  password: 'password',
  database: 'mydb'
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`DB Time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('DB error: ' + err.message);
  }
});

app.listen(5000, () => {
  console.log('Backend listening on port 5000');
});

