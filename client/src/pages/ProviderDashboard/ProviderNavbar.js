import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProviderNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="provider-navbar">
      <Link to="/provider/add-service">Add Service</Link>
      <Link to="/provider/bookings">Bookings</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default ProviderNavbar;
