import React, { useEffect, useState } from "react";
import axios from "axios";

const BookService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/services", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setServices(res.data);
    };
    fetchServices();
  }, []);

  const handleBooking = async (serviceId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/bookings",
        { serviceId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Service booked successfully!");
    } catch (err) {
      alert("Error booking service: " + err.response.data.error);
    }
  };

  return (
    <div className="services-list">
      <h1>Book a Service</h1>
      <div className="services-cards">
        {services.map((s) => (
          <div className="card" key={s.id}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <p>₹{s.price}</p>
            <button onClick={() => handleBooking(s.id)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookService;
