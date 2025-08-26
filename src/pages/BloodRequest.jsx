export default function BloodRequest() {
  return (
    <div className="form-container">
      <h2>Request Blood</h2>
      <form>
        <input type="text" placeholder="Patient Name" required />
        <input type="text" placeholder="Blood Group Needed" required />
        <input type="text" placeholder="Hospital" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Urgency Level" required />
        <input type="text" placeholder="Contact Number" required />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}
