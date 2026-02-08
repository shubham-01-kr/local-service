import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTools,
  FaHome,
  FaUser,
  FaUserTie,
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
  FaPlusCircle,
  FaBook,
  FaSignOutAlt
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [userDropdown, setUserDropdown] = useState(false);
  const [providerDropdown, setProviderDropdown] = useState(false);

  let userTimer;
  let providerTimer;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="navbar-wrapper">
      {/* ================= TOP STRIP ================= */}
      <div className="top-bar">
  <FaTools className="top-icon" />
  <span className="brand-text">LocalService</span>
</div>


      {/* ================= BOTTOM STRIP ================= */}
      <div className="bottom-bar">
        <div className="nav-center">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>

          {/* ===== WHEN NOT LOGGED IN ===== */}
          {!role && (
            <>
              {/* USER */}
              <div
                className="dropdown"
                onMouseEnter={() => {
                  clearTimeout(userTimer);
                  setUserDropdown(true);
                }}
                onMouseLeave={() => {
                  userTimer = setTimeout(() => {
                    setUserDropdown(false);
                  }, 300);
                }}
              >
                <span className="nav-link">
                  <FaUser /> User
                </span>

                {userDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/login?role=user">
                      <FaSignInAlt /> Login
                    </Link>
                    <Link to="/register?role=user">
                      <FaUserPlus /> Sign up
                    </Link>
                  </div>
                )}
              </div>

              {/* PROVIDER */}
              <div
                className="dropdown"
                onMouseEnter={() => {
                  clearTimeout(providerTimer);
                  setProviderDropdown(true);
                }}
                onMouseLeave={() => {
                  providerTimer = setTimeout(() => {
                    setProviderDropdown(false);
                  }, 300);
                }}
              >
                <span className="nav-link">
                  <FaUserTie /> Provider
                </span>

                {providerDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/login?role=provider">
                      <FaSignInAlt /> Login
                    </Link>
                    <Link to="/register?role=provider">
                      <FaUserPlus /> Sign up
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ===== USER DASHBOARD ===== */}
          {role === "user" && (
            <>
              <Link to="/user/profile" className="nav-link">
                <FaClipboardList /> All Services
              </Link>
              <Link to="/user/my-bookings" className="nav-link">
                <FaBook /> My Bookings
              </Link>
            </>
          )}

          {/* ===== PROVIDER DASHBOARD ===== */}
          {role === "provider" && (
            <>
              <Link to="/provider/add-service" className="nav-link">
                <FaPlusCircle /> Add Services
              </Link>
              <Link to="/provider/bookings" className="nav-link">
                <FaClipboardList /> Check Bookings
              </Link>
            </>
          )}
        </div>

        {/* ===== LOGOUT ===== */}
        {role && (
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
