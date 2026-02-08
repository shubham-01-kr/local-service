const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Secret key (for simplicity)
const JWT_SECRET = "supersecret123";

// Register User
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      "INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) RETURNING id,name,email,role",
      [name, email, hashedPassword, role || "user"]
    );

    const token = jwt.sign({ id: newUser.rows[0].id, role: newUser.rows[0].role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ user: newUser.rows[0], token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (user.rows.length === 0) return res.status(400).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ user: { id: user.rows[0].id, name: user.rows[0].name, email: user.rows[0].email, role: user.rows[0].role }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser };
