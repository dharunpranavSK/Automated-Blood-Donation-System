import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dob: "",
    bloodGroup: "",
    location: "",
    native: "",
    willing: false,
    lastDonated: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration submitted!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Mobile number
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>

        <label>
          DOB
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>

        <label>
          Blood Group
          <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </label>

        <label>
          Current location
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>

        <label>
          Native
          <input type="text" name="native" value={formData.native} onChange={handleChange} required />
        </label>

        <label>
          Willing to Donate Blood
          <input type="checkbox" name="willing" checked={formData.willing} onChange={handleChange} />
        </label>

        <label>
          Last Donated Date
          <input type="date" name="lastDonated" value={formData.lastDonated} onChange={handleChange} />
        </label>

        <label style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} required />
          <span style={{ marginLeft: "8px" }}>
            Hereby I declare that I am willing to donate blood in an emergency situation
          </span>
        </label>

        <button type="submit" style={{ marginTop: "20px", padding: "10px 20px", background: "#c62828", color: "white", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
