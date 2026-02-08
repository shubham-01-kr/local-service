import React from "react";
import { Outlet } from "react-router-dom";
// import UserNavbar from "./UserNavbar"; 

const UserDashboard = () => {
  return (
    <div>
      {/* <UserNavbar /> <-- Navbar yaha call hona chahiye */}
      <div className="dashboard-content">
        <Outlet /> {/* Page content load hoga */}
      </div>
    </div>
  );
};

export default UserDashboard;
