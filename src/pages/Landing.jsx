import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="card" onClick={() => navigate("/blood-request")}>
        Blood Request
      </div>

      <div className="card" onClick={() => navigate("/donor-registration")}>
        Donor Registration
      </div>

      <div className="card" onClick={() => navigate("/details-renewal")}>
        Details Renewal
      </div>
    </div>
  );
}

export default LandingPage;
