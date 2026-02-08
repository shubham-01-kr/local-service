import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      console.log(res.data);
      alert("Login successful!");
    } catch (err) {
      console.error(err.response.data);
      alert("Error: " + err.response.data.error);
    }
  };

  return (
    <section className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
