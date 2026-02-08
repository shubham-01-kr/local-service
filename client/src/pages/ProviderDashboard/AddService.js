import React, { useState } from "react";
import axios from "axios";

const AddService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [price, setPrice] = useState("");

  const handleAddService = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/services",
        { name, description, experience, price },
        { headers: { Authorization: "Bearer " + token } }
      );

      alert("Service Added Successfully");

      setName("");
      setDescription("");
      setExperience("");
      setPrice("");
    } catch (err) {
      alert("Error adding service");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f2f2f2", paddingTop: 40 }}>
      <form
        onSubmit={handleAddService}
        style={{
          background: "white",
          width: 350,
          margin: "auto",
          padding: 25,
          borderRadius: 8,
          boxShadow: "0 0 10px #ccc"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Add Service</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Service Name"
          required
          style={inputStyle}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{ ...inputStyle, height: 80 ,padding: 10}}
        />

        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience (years)"
          required
          style={inputStyle}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#0d6efd",
            border: "none",
            color: "white",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: 4,
  border: "1px solid #ccc"
};

export default AddService;
