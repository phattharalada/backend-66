const express = require('express');
const mysql = require('mysql2/promise'); // ใช้ promise-based MySQL
const app = express();
app.use(express.json());

// สร้าง Connection Pool เชื่อมต่อกับฐานข้อมูล MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// GET /query-1: ดึงหนังสือมาแสดง 2 เล่มแรก ที่ชื่อมีตัวอักษร "o"
app.get('/query-1', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM books WHERE bname LIKE '%o%' LIMIT 2"
    );
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database query failed');
  }
});

// GET /query-2: หาว่าขายหนังสือได้กี่เล่ม (จำนวนรวม)
app.get('/query-2', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT SUM(amount) AS total_sold FROM sell_histories'
    );
    connection.release();
    res.json({ total_books_sold: rows[0].total_sold });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database query failed');
  }
});

// GET /query-3: แสดง ISBN ของหนังสือที่ขายออก
app.get('/query-3', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT DISTINCT isbn FROM sell_histories'
    );
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database query failed');
  }
});

// GET /query-4: หาว่าขายหนังสือได้เงินทั้งหมดเท่าไร (รายได้รวม)
app.get('/query-4', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT SUM(s.amount * b.price) AS total_revenue ' +
      'FROM sell_histories AS s JOIN books AS b ON s.id = b.id'
    );
    connection.release();
    res.json({ total_revenue: rows[0].total_revenue });
  } catch (err) {
    console.error("Error:", err.message); // เพิ่มข้อความ Error
    res.status(500).send({ error: "Database query failed", message: err.message });
  }
});

// Start Server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
