import React, { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/bookings/provider", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      alert("Failed to load bookings");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleAction = async (bookingId, action) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/bookings/${bookingId}`,
        { status: action },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchBookings(); // refresh after update
    } catch (err) {
      alert("Error updating booking: " + err.response?.data?.error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : bookings.map((b) => (
        <div key={b.id} style={{
          background: "white",
          padding: "15px",
          margin: "10px 0",
          boxShadow: "0 0 5px gray",
          borderRadius: "8px"
        }}>
          <p><strong>User:</strong> {b.customer_name}</p>
          <p><strong>Contact:</strong> {b.contact}</p>
          <p><strong>Service:</strong> {b.service_name}</p>
          <p><strong>Experience:</strong> {b.experience} years</p>
          <p><strong>Price:</strong> ₹{b.price}</p>
          <p><strong>Status:</strong> {b.status}</p>

          {b.status === "pending" && (
            <div style={{ marginTop: "10px" }}>
              <button 
                onClick={() => handleAction(b.id, "accepted")} 
                style={{ marginRight: "10px", padding: "5px 10px", cursor: "pointer" , backgroundColor: "green", color: "white", border: "none" }}
              >Accept</button>
              <button 
                onClick={() => handleAction(b.id, "rejected")} 
                style={{ padding: "5px 10px", cursor: "pointer" , backgroundColor: "red", color: "white", border: "none" }}
              >Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Bookings;
