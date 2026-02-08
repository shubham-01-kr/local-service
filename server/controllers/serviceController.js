const pool = require("../db");

// ADD SERVICE (provider)
exports.addService = async (req, res) => {
  try {
    const { name, description, experience, price } = req.body;

    const providerId = req.user.id; // from JWT

    const result = await pool.query(
      `INSERT INTO services 
      (service_name, description, experience, price, provider_id)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
      [name, description, experience, price, providerId]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Service add failed" });
  }
};

// GET ALL SERVICES (for users)
exports.getAllServices = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        services.id,
        services.service_name,
        services.description,
        services.experience,
        services.price,
        users.name AS provider_name
      FROM services
      JOIN users ON services.provider_id = users.id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot fetch services" });
  }
};
