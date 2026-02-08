const pool = require("../db");

// GET BOOKINGS (user OR provider)
exports.getBookings = async (req, res) => {
  try {
    let result;

    if (req.user.role === "provider") {
      result = await pool.query(`
        SELECT 
          b.id,
          b.status,
          b.customer_name,
          b.contact,
          s.service_name,
          s.price
        FROM bookings b
        JOIN services s ON b.service_id = s.id
        WHERE s.provider_id = $1
        ORDER BY b.id DESC
      `, [req.user.id]);
    } else {
      result = await pool.query(`
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
    }

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Booking fetch failed" });
  }
};

// CREATE BOOKING
exports.createBooking = async (req, res) => {
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
};

// UPDATE STATUS
exports.updateBookingStatus = async (req, res) => {
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
};
