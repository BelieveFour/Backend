import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const mySqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT, 10)
});


export default mySqlPool;
