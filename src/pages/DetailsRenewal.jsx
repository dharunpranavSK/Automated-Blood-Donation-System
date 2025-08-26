import React, { useState } from "react";

function DetailsRenewal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    location: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Renewal Details Submitted:", formData);
    alert("Your details have been renewed successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          Details Renewal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-left text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-left text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-left text-sm font-medium">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-left text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
          >
            Renew Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsRenewal;
