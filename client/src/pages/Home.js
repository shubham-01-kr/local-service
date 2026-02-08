import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Find Trusted Local Professionals</h1>
        <p>Plumbers, Electricians, Carpenters & more near you</p>

        <div className="search-box">
          <input placeholder="Search plumber, electrician..." />
          <button>Search</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">

        {/* 🔥 HEADING MUST BE SEPARATE */}
        <div className="services-heading">
          <h2>Popular Services</h2>
        </div>

        {/* 🔥 CARDS ROW */}
        <div className="service-grid">
          <div className="card">
            <h3>Plumber</h3>
            <p>Tap repair, leakage, fitting</p>
            <span>From ₹200</span>
          </div>

          <div className="card">
            <h3>Electrician</h3>
            <p>Wiring, fan, switch repair</p>
            <span>From ₹250</span>
          </div>

          <div className="card">
            <h3>Carpenter</h3>
            <p>Furniture, doors, cupboards</p>
            <span>From ₹300</span>
          </div>

          <div className="card">
            <h3>Painter</h3>
            <p>Home & office painting</p>
            <span>From ₹400</span>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
  