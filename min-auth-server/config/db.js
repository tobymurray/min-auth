module.exports = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.DB_USER,
    database: process.env.DB_NAME + "_" + process.env.NODE_ENV,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    max: process.env.DB_NUM_MAX_CLIENTS,
    idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT_MILLIS,
  }
});
