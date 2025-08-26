import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import BloodRequest from "./pages/BloodRequest";
import DonorRegistration from "./pages/DonorRegistration";
import DetailsRenewal from "./pages/DetailsRenewal";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/blood-request" element={<BloodRequest />} />
            <Route path="/donor-registration" element={<DonorRegistration />} />
            <Route path="/details-renewal" element={<DetailsRenewal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
