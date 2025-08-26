import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Automated Blood Donation System</h1>
      <div className="navbar-right">
        <button className="profile-btn">Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
