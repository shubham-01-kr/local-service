import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <Link to="/user/profile">All Services</Link>
      <Link to="/user/book-service">Book Service</Link>
      <Link to="/user/my-bookings">My Bookings</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default UserNavbar;
