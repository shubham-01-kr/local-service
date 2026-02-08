import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/bookings", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setBookings(res.data);
    } catch (err) {
      console.log("Booking load error:", err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Bookings</h2>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b) => (
        <div
          key={b.id}
          style={{
            background: "white",
            padding: "10px",
            margin: "10px 0",
            boxShadow: "0 0 5px gray"
          }}
        >
          <p><b>Service:</b> {b.service_name}</p>

          <p><b>Provider:</b> {b.provider_name}</p>

          <p><b>Price:</b> ₹{b.price}</p>

          <p><b>Status:</b> {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
