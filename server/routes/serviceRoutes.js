const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const pool = require("../db");


// ================= ADD SERVICE (PROVIDER) =================
router.post("/", auth, async (req, res) => {
  try {
    const { name, description, experience, price } = req.body;

    if (!name || !description || !experience || !price) {
      return res.status(400).json({ error: "All fields required" });
    }

    const result = await pool.query(
      `INSERT INTO services 
      (service_name, description, experience, price, provider_id)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
      [name, description, experience, price, req.user.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Service add failed" });
  }
});


// ================= GET ALL SERVICES (USER PROFILE) =================
router.get("/", auth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        s.id,
        s.service_name,
        s.description,
        s.experience,
        s.price,
        u.name AS provider_name
      FROM services s
      JOIN users u ON s.provider_id = u.id
      ORDER BY s.id DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fetch failed" });
  }
});

module.exports = router;
