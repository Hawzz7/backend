import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

(async () => {
  try {
    // Test if we can connect to the database
    const [rows] = await db.query('SELECT 1');
    console.log('Database connection successful:', rows);
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();


// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Narcos123@#',
//   database: 'jokes_db',
// });

export default db;
