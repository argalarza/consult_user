const { Client } = require('pg');

// Conexión a la base de datos PostgreSQL
const pgClient = new Client({
  host: process.env.PG_DB_HOST,
  user: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASSWORD,
  database: process.env.PG_DB_NAME,
  port: process.env.PG_DB_PORT
});

pgClient.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Error connecting to PostgreSQL:', err));

// Obtener usuario por nombre en PostgreSQL
const getUserByUsernameFromPostgres = (username) => {
  return new Promise((resolve, reject) => {
    pgClient.query(
      'SELECT * FROM users WHERE username = $1',
      [username],
      (err, result) => {
        if (err) {
          console.error('Error querying PostgreSQL:', err);
          return reject(err);
        }
        if (result.rows.length === 0) {
          return resolve(null); // Usuario no encontrado
        }
        resolve(result.rows[0]); // Retornar el primer usuario encontrado
      }
    );
  });
};

module.exports = { getUserByUsernameFromPostgres };
