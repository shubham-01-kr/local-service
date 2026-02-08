import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/services", {
      headers: { Authorization: `Bearer ${token}` }
    });

    setServices(res.data);
  };

  const openForm = (serviceId) => {
    setSelectedService(serviceId);
    setShowForm(true);
  };

  const submitBooking = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/bookings",
      {
        serviceId: selectedService,
        customer_name: customerName,
        contact: contact
      },
      {
        headers: { Authorization: "Bearer " + token }
      }
    );

    alert("Booking done");

    setShowForm(false);
    setCustomerName("");
    setContact("");
  };

  return (
    <div style={{ padding: 30, background: "#f2f2f2", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>All Services</h2>

      {services.map((s) => (
        <div
          key={s.id}
          style={{
            background: "white",
            padding: 15,
            marginBottom: 15,
            borderRadius: 6,
            boxShadow: "0 0 6px #ccc"
          }}
        >
          <h3 style={{ marginBottom: 8 }}>
            {s.service_name || "Service"}
          </h3>

          <p>{s.description}</p>

          <p><b>Provider:</b> {s.provider_name}</p>

          <p><b>Experience:</b> {s.experience} years</p>

          <p style={{ fontSize: 18 }}><b>₹{s.price}</b></p>

          <button
            onClick={() => openForm(s.id)}
            style={{
              padding: "8px 15px",
              background: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Book Service
          </button>
        </div>
      ))}

      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#000000aa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "white",
              padding: 25,
              width: 320,
              borderRadius: 8
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: 15 }}>
              Your Details
            </h3>

            <input
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={inputStyle}
            />

            <button
              onClick={submitBooking}
              style={{
                width: "100%",
                padding: 10,
                background: "#0d6efd",
                border: "none",
                color: "white",
                marginTop: 10
              }}
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setShowForm(false)}
              style={{
                width: "100%",
                padding: 10,
                marginTop: 8
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  border: "1px solid #ccc",
  borderRadius: 4
};

export default Profile;
