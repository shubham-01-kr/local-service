const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes")); // ✅ Important

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
