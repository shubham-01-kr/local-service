import React from "react";
import { Outlet } from "react-router-dom";


const ProviderDashboard = () => {
  return (
    <div>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProviderDashboard;
