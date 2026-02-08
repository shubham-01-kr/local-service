import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      console.log(res.data);
      alert("Registration successful!");
    } catch (err) {
      console.error(err.response.data);
      alert("Error: " + err.response.data.error);
    }
  };

  return (
    <section className="register-form">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required /><br /><br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegisterForm;
