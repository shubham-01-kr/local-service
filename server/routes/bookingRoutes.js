const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const pool = require("../db");

/* ===============================
   CREATE BOOKING (USER)
================================ */
router.post("/", auth, async (req, res) => {
  try {
    const { serviceId, customer_name, contact } = req.body;

    await pool.query(
      `INSERT INTO bookings (user_id, service_id, customer_name, contact, status)
       VALUES ($1,$2,$3,$4,'pending')`,
      [req.user.id, serviceId, customer_name, contact]
    );

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Booking failed" });
  }
});

/* ===============================
   GET BOOKINGS (USER)  ✅ FIX
================================ */
router.get("/", auth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        b.id,
        b.status,
        s.service_name,
        s.price,
        u.name AS provider_name
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      JOIN users u ON s.provider_id = u.id
      WHERE b.user_id = $1
      ORDER BY b.id DESC
    `, [req.user.id]);

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Booking fetch failed" });
  }
});

/* ===============================
   GET BOOKINGS (PROVIDER)
================================ */
router.get("/provider", auth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        b.id,
        b.customer_name,
        b.contact,
        b.status,
        s.service_name,
        s.price
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      WHERE s.provider_id = $1
      ORDER BY b.id DESC
    `, [req.user.id]);

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fetch failed" });
  }
});

/* ===============================
   UPDATE BOOKING STATUS
================================ */
router.put("/:id", auth, async (req, res) => {
  try {
    const { status } = req.body;

    await pool.query(
      "UPDATE bookings SET status=$1 WHERE id=$2",
      [status, req.params.id]
    );

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Update failed" });
  }
});

module.exports = router;
