import mysql from 'mysql2';
import config from '../config/config.js';

export const connection = mysql.createPool({
  connectionLimit: config.connectionLimit,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

